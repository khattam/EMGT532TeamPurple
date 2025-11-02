import { DesignObjective, FunctionalRequirement, TechnicalSpec, AppFeature } from '@/types';

export const designObjectives: DesignObjective[] = [
  {
    id: 'safety',
    title: 'Safety',
    description: 'Provide a reliable, non-harmful device to consumers that they can use daily.',
    icon: 'shield',
  },
  {
    id: 'comfort',
    title: 'Comfort',
    description: 'Provide a device that a user can wear for several hours at a time without the need to take it off.',
    icon: 'heart',
  },
  {
    id: 'ease-of-use',
    title: 'Ease of Use',
    description: 'Consumers should not have to spend a lot of time in order to learn how to use this product.',
    icon: 'zap',
  },
  {
    id: 'durability',
    title: 'Durability',
    description: 'Consumers will not have to replace this product for at least 3 years after buying it.',
    icon: 'award',
  },
  {
    id: 'daily-usability',
    title: 'Daily Usability',
    description: 'Consumers should be able to use this device for a full day without any issues.',
    icon: 'sun',
  },
  {
    id: 'affordability',
    title: 'Affordability',
    description: 'Consumers will pay a fair price for this item, competitive with other brands in the market.',
    icon: 'dollar-sign',
  },
];

export const functionalRequirements: FunctionalRequirement[] = [
  {
    id: 'sleepiness-detection',
    title: 'Sleepiness Detection',
    description: 'Advanced sensor technology that monitors your alertness in real-time.',
    details: [
      'Heart rate monitoring',
      'Movement pattern analysis',
      'Real-time drowsiness detection',
      'Adaptive learning algorithms',
    ],
    image: '/placeholder-detection.jpg',
  },
  {
    id: 'shock-mechanism',
    title: 'Progressive Shock System',
    description: 'Gentle to strong alerts that escalate based on your drowsiness level.',
    details: [
      'Configurable intensity levels',
      'Progressive escalation',
      'Safe electrical stimulation',
      'Instant alertness response',
    ],
    image: '/placeholder-shock.jpg',
  },
  {
    id: 'display',
    title: 'Intuitive Display',
    description: 'Full-color LED screen for easy configuration and status monitoring.',
    details: [
      'Full-color LED display',
      'Touch-responsive interface',
      'Real-time status updates',
      'Battery level indicator',
    ],
    image: '/placeholder-display.jpg',
  },
  {
    id: 'charging',
    title: 'Simple Charging',
    description: 'Standard USB-C charging for convenience and compatibility.',
    details: [
      'USB-C fast charging',
      '24-hour battery life',
      'Quick charge capability',
      'Universal compatibility',
    ],
    image: '/placeholder-charging.jpg',
  },
];

export const technicalSpecs: TechnicalSpec[] = [
  {
    id: 'microcontroller',
    category: 'Processing',
    title: 'Microcontroller',
    description: 'Low-power microcontroller for efficient operation',
    specs: [
      { label: 'Type', value: 'ARM Cortex-M4' },
      { label: 'Clock Speed', value: '80 MHz' },
      { label: 'Memory', value: '256 KB RAM' },
    ],
  },
  {
    id: 'sensors',
    category: 'Detection',
    title: 'Sensors',
    description: 'Multiple sensors for accurate drowsiness detection',
    specs: [
      { label: 'Heart Rate', value: 'Optical PPG sensor' },
      { label: 'Motion', value: '6-axis IMU' },
      { label: 'Accuracy', value: '±2 BPM' },
    ],
  },
  {
    id: 'shock-output',
    category: 'Alert System',
    title: 'Shock Output',
    description: 'Safe and configurable electrical stimulation',
    specs: [
      { label: 'Voltage Range', value: '5-50V' },
      { label: 'Levels', value: '5 intensity settings' },
      { label: 'Safety', value: 'Current-limited' },
    ],
  },
  {
    id: 'display-spec',
    category: 'Interface',
    title: 'Display',
    description: 'Vibrant full-color LED screen',
    specs: [
      { label: 'Type', value: 'OLED' },
      { label: 'Size', value: '1.3 inches' },
      { label: 'Resolution', value: '240x240 pixels' },
    ],
  },
  {
    id: 'battery',
    category: 'Power',
    title: 'Battery',
    description: 'Long-lasting lithium-ion battery',
    specs: [
      { label: 'Capacity', value: '300 mAh' },
      { label: 'Battery Life', value: '24 hours' },
      { label: 'Charge Time', value: '2 hours' },
    ],
  },
  {
    id: 'wristband',
    category: 'Design',
    title: 'Wristband',
    description: 'Comfortable and durable construction',
    specs: [
      { label: 'Material', value: 'Hypoallergenic silicone' },
      { label: 'Water Resistance', value: 'IP67' },
      { label: 'Sizes', value: 'S, M, L' },
    ],
  },
  {
    id: 'controls',
    category: 'Interface',
    title: 'Controls',
    description: 'Intuitive physical controls',
    specs: [
      { label: 'Type', value: 'Scroll dial' },
      { label: 'Buttons', value: '2 physical buttons' },
      { label: 'Haptic', value: 'Vibration feedback' },
    ],
  },
];

export const appFeatures: AppFeature[] = [
  {
    id: 'device-config',
    title: 'Device Configuration',
    description: 'Customize shock intensity, sensitivity, and alert preferences',
    icon: 'settings',
  },
  {
    id: 'sleep-tracking',
    title: 'Sleep Analytics',
    description: 'Track your sleep patterns and drowsiness trends over time',
    icon: 'activity',
  },
  {
    id: 'notifications',
    title: 'Smart Notifications',
    description: 'Receive alerts and insights about your alertness levels',
    icon: 'bell',
  },
  {
    id: 'sync',
    title: 'Cloud Sync',
    description: 'Sync your data across devices and access from anywhere',
    icon: 'cloud',
  },
];
