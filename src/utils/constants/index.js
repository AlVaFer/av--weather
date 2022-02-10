

export const INITIAL_CITIES = [
    3128760, // Barcelona
    2988507, // Paris
    2643743, // London
    2950159, // Berlin
    4062577, // Florence
    2267057, // Lisbon
    2673730, // Stockholm
    3378644, // Geneve
    5128581, // New York
    524901, // Moscow
    1850147, // Tokyo
];

export const MOCK_ACTIVE_CITY = {
  coord: {
    lon: 2.159,
    lat: 41.3888,
  },
  sys: {
    country: 'ES',
    timezone: 7200,
    sunrise: 1633240205,
    sunset: 1633282227,
  },
  weather: [
    {
      id: 801,
      main: 'Clouds',
      description: 'few clouds',
      icon: '02d',
    },
  ],
  main: {
    temp: 24.86,
    feels_like: 25.44,
    temp_min: 23.6,
    temp_max: 26.22,
    pressure: 1008,
    humidity: 78,
  },
  visibility: 10000,
  wind: {
    speed: 0.89,
    deg: 192,
  },
  clouds: {
    all: 20,
  },
  dt: 1633273753,
  id: 3128760,
  name: 'Barcelona',
};

export const MOCK_NEW_CITY = {
  coord: {
    lon: 2.159,
    lat: 41.3888,
  },
  sys: {
    country: 'ES',
    timezone: 7200,
    sunrise: 1633240205,
    sunset: 1633282227,
  },
  weather: [
    {
      id: 801,
      main: 'Clouds',
      description: 'few clouds',
      icon: '02d',
    },
  ],
  main: {
    temp: 24.86,
    feels_like: 25.44,
    temp_min: 23.6,
    temp_max: 26.22,
    pressure: 1008,
    humidity: 78,
  },
  visibility: 10000,
  wind: {
    speed: 0.89,
    deg: 192,
  },
  clouds: {
    all: 20,
  },
  dt: 1633273753,
  id: 3168760,
  name: 'Miami',
};


export const INITIAL_CITIES_ARRAY = [
  {
    coord: {
      lon: 2.159,
      lat: 41.3888,
    },
    sys: {
      country: 'ES',
      timezone: 7200,
      sunrise: 1633240205,
      sunset: 1633282227,
    },
    weather: [
      {
        id: 801,
        main: 'Clouds',
        description: 'few clouds',
        icon: '02d',
      },
    ],
    main: {
      temp: 24.86,
      feels_like: 25.44,
      temp_min: 23.6,
      temp_max: 26.22,
      pressure: 1008,
      humidity: 78,
    },
    visibility: 10000,
    wind: {
      speed: 0.89,
      deg: 192,
    },
    clouds: {
      all: 20,
    },
    dt: 1633273753,
    id: 3128760,
    name: 'Barcelona',
  },
  {
    coord: {
      lon: 2.3488,
      lat: 48.8534,
    },
    sys: {
      country: 'FR',
      timezone: 7200,
      sunrise: 1633240377,
      sunset: 1633281963,
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04d',
      },
    ],
    main: {
      temp: 15.12,
      feels_like: 14.59,
      temp_min: 14.04,
      temp_max: 15.99,
      pressure: 1007,
      humidity: 73,
    },
    visibility: 10000,
    wind: {
      speed: 0.89,
      deg: 203,
    },
    clouds: {
      all: 75,
    },
    dt: 1633273755,
    id: 2988507,
    name: 'Paris',
  },
  {
    coord: {
      lon: -0.1257,
      lat: 51.5085,
    },
    sys: {
      country: 'GB',
      timezone: 3600,
      sunrise: 1633241064,
      sunset: 1633282464,
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04d',
      },
    ],
    main: {
      temp: 14.69,
      feels_like: 14.2,
      temp_min: 13.25,
      temp_max: 16.41,
      pressure: 1000,
      humidity: 76,
    },
    visibility: 10000,
    wind: {
      speed: 5.66,
      deg: 230,
    },
    clouds: {
      all: 57,
    },
    dt: 1633273756,
    id: 2643743,
    name: 'London',
  },
  {
    coord: {
      lon: 13.4105,
      lat: 52.5244,
    },
    sys: {
      country: 'DE',
      timezone: 7200,
      sunrise: 1633237850,
      sunset: 1633279182,
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d',
      },
    ],
    main: {
      temp: 22.24,
      feels_like: 22.01,
      temp_min: 20.7,
      temp_max: 23.32,
      pressure: 1004,
      humidity: 57,
    },
    visibility: 10000,
    wind: {
      speed: 5.36,
      deg: 155,
    },
    clouds: {
      all: 0,
    },
    dt: 1633273749,
    id: 2950159,
    name: 'Berlin',
  },
  {
    coord: {
      lon: -87.6773,
      lat: 34.7998,
    },
    sys: {
      country: 'US',
      timezone: -18000,
      sunrise: 1633261619,
      sunset: 1633303925,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    main: {
      temp: 20.95,
      feels_like: 21.5,
      temp_min: 20.02,
      temp_max: 22.19,
      pressure: 1017,
      humidity: 92,
    },
    visibility: 5758,
    wind: {
      speed: 2.24,
      deg: 133,
    },
    clouds: {
      all: 100,
    },
    dt: 1633273761,
    id: 4062577,
    name: 'Florence',
  },
  {
    coord: {
      lon: -9.1333,
      lat: 38.7167,
    },
    sys: {
      country: 'PT',
      timezone: 3600,
      sunrise: 1633242849,
      sunset: 1633285001,
    },
    weather: [
      {
        id: 801,
        main: 'Clouds',
        description: 'few clouds',
        icon: '02d',
      },
    ],
    main: {
      temp: 20.66,
      feels_like: 20.01,
      temp_min: 19.75,
      temp_max: 21.71,
      pressure: 1016,
      humidity: 47,
    },
    visibility: 10000,
    wind: {
      speed: 8.23,
      deg: 350,
    },
    clouds: {
      all: 20,
    },
    dt: 1633273754,
    id: 2267057,
    name: 'Lisbon',
  },
  {
    coord: {
      lon: 18.0649,
      lat: 59.3326,
    },
    sys: {
      country: 'SE',
      timezone: 7200,
      sunrise: 1633237038,
      sunset: 1633277760,
    },
    weather: [
      {
        id: 801,
        main: 'Clouds',
        description: 'few clouds',
        icon: '02d',
      },
    ],
    main: {
      temp: 13.85,
      feels_like: 13.51,
      temp_min: 13.47,
      temp_max: 13.95,
      pressure: 1008,
      humidity: 85,
    },
    visibility: 10000,
    wind: {
      speed: 7.2,
      deg: 140,
    },
    clouds: {
      all: 20,
    },
    dt: 1633273756,
    id: 2673730,
    name: 'Stockholm',
  },
  {
    coord: {
      lon: -58.1553,
      lat: 6.8045,
    },
    sys: {
      country: 'GY',
      timezone: -14400,
      sunrise: 1633254005,
      sunset: 1633297372,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    main: {
      temp: 32.16,
      feels_like: 39.16,
      temp_min: 32.16,
      temp_max: 32.16,
      pressure: 1011,
      sea_level: 1011,
      grnd_level: 1011,
      humidity: 82,
    },
    visibility: 9029,
    wind: {
      speed: 2.99,
      deg: 92,
    },
    clouds: {
      all: 100,
    },
    dt: 1633273758,
    id: 3378644,
    name: 'Georgetown',
  },
  {
    coord: {
      lon: -74.006,
      lat: 40.7143,
    },
    sys: {
      country: 'US',
      timezone: -14400,
      sunrise: 1633258480,
      sunset: 1633300503,
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d',
      },
    ],
    main: {
      temp: 22.21,
      feels_like: 22.03,
      temp_min: 19.07,
      temp_max: 24.75,
      pressure: 1016,
      humidity: 59,
    },
    visibility: 10000,
    wind: {
      speed: 2.06,
      deg: 220,
    },
    clouds: {
      all: 1,
    },
    dt: 1633273764,
    id: 5128581,
    name: 'New York',
  },
  {
    coord: {
      lon: 37.6156,
      lat: 55.7522,
    },
    sys: {
      country: 'RU',
      timezone: 10800,
      sunrise: 1633232166,
      sunset: 1633273251,
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10n',
      },
    ],
    main: {
      temp: 8.11,
      feels_like: 7.24,
      temp_min: 4.6,
      temp_max: 9.24,
      pressure: 1034,
      sea_level: 1034,
      grnd_level: 1016,
      humidity: 53,
    },
    visibility: 10000,
    wind: {
      speed: 1.74,
      deg: 122,
    },
    clouds: {
      all: 100,
    },
    dt: 1633273680,
    id: 524901,
    name: 'Moscow',
  },
  {
    coord: {
      lon: 139.6917,
      lat: 35.6895,
    },
    sys: {
      country: 'JP',
      timezone: 32400,
      sunrise: 1633293488,
      sunset: 1633335704,
    },
    weather: [
      {
        id: 801,
        main: 'Clouds',
        description: 'few clouds',
        icon: '02n',
      },
    ],
    main: {
      temp: 21.19,
      feels_like: 21.38,
      temp_min: 17.98,
      temp_max: 24.19,
      pressure: 1026,
      humidity: 77,
    },
    visibility: 10000,
    wind: {
      speed: 2.06,
      deg: 120,
    },
    clouds: {
      all: 20,
    },
    dt: 1633273753,
    id: 1850147,
    name: 'Tokyo',
  },
];
  