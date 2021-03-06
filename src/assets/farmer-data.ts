export const farmers = [
  {
    id: 1,
    first_name: 'Joe',
    last_name: 'Farmer',
    blockchain_public_key: '123XYZ',
    location: {
      country: 'Nicaragua',
      city: 'Matagalpa',
      region: 'occidental',
    },
    farm_information: {
      farm_name: 'esmerelda',
      altitude: 1800,
      geo_location: {
        latitude: 12.929,
        longitude: 85.915,
      },
      products: [
        {
          product_id: 1,
          product: {
            name: 'coffee',
            grade: 'AA',
            category: 'arabic',
            species_type: 'geisha',
            notes: 'high quality coffee',
            certifications: [
              {
                type: 'organic',
                certifying_body: 'usda',
              },
              {
                type: 'fair trade',
                certifying_body: 'fair trade usa',
              },
            ],
          },
        },
      ],
    },
  },
]
