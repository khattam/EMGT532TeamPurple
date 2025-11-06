// Simple analytics tracker
export interface AnalyticsEvent {
    userId: string;
    sessionId: string;
    event: 'pageview' | 'click' | 'session_start' | 'session_end';
    page?: string;
    element?: string;
    timestamp: number;
}

export class Analytics {
    private static userId: string;
    private static sessionId: string;
    private static sessionStart: number;
    private static lastActivity: number;

    static init() {
        // Get or create user ID (persistent across sessions)
        this.userId = localStorage.getItem('analytics_user_id') || this.generateId();
        localStorage.setItem('analytics_user_id', this.userId);

        // Create session ID (new per session)
        this.sessionId = this.generateId();
        this.sessionStart = Date.now();
        this.lastActivity = Date.now();

        // Track session start
        this.track('session_start', { page: window.location.pathname });

        // Track page visibility
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.track('session_end', {
                    page: window.location.pathname,
                    duration: Date.now() - this.sessionStart
                });
            }
        });

        // Track clicks
        document.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            const element = target.tagName + (target.id ? `#${target.id}` : '') +
                (target.className ? `.${target.className.split(' ')[0]}` : '');
            this.track('click', {
                page: window.location.pathname,
                element
            });
        });

        // Update activity timestamp
        ['mousedown', 'keydown', 'scroll', 'touchstart'].forEach(event => {
            document.addEventListener(event, () => {
                this.lastActivity = Date.now();
            });
        });
    }

    private static generateId(): string {
        return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }

    static track(event: AnalyticsEvent['event'], data?: any) {
        const payload: AnalyticsEvent = {
            userId: this.userId,
            sessionId: this.sessionId,
            event,
            page: data?.page,
            element: data?.element,
            timestamp: Date.now(),
        };

        console.log('📊 Tracking:', event, payload);

        // Send to API
        fetch('/api/track', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...payload, ...data }),
        })
            .then(res => {
                console.log('✅ Track response:', res.status);
                return res.json();
            })
            .then(data => console.log('Response data:', data))
            .catch(err => console.error('❌ Analytics error:', err));
    }

    static getSessionDuration(): number {
        return Date.now() - this.sessionStart;
    }

    static getTimeSinceLastActivity(): number {
        return Date.now() - this.lastActivity;
    }
}
