const { gql } = require('apollo-server');

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "Acceptable park names: magicKingdom, animalKingdom, epcot, hollywoodStudios"
    attraction(park: ParkName!, permalink: String!): AttractionDetail!

    "Acceptable park names: magicKingdom, animalKingdom, epcot, hollywoodStudios"
    parkAttractions(name: ParkName!): [AttractionListItem]!
  }

  "Acceptable park names."
  enum ParkName {
    animalKingdom
    epcot
    hollywoodStudios
    magicKingdom
  }

  "Item in the list of attractions for a park."
  type AttractionListItem {
    name: String!
    permalink: String!
    short_name: String!
    park: String!
    detail: AttractionDetail!
  }

  "Detailed attraction information."
  type AttractionDetail {
    allow_showtimes_after_close: Boolean
    allow_time_restriction: Boolean
    assistive_listening: Boolean
    audio_description: Boolean
    average_wait_assumes: String
    average_wait_per_hundred: Float
    category_code: String
    crazy_threshold: Int
    created_at: String
    crowd_calendar_version: Int
    disconnected_fastpass_booth: Boolean
    duration: Int
    extinct_on: String
    fastpass_booth: Boolean
    fastpass_only: Boolean
    frightening: Boolean
    handheld_captioning: Boolean
    height_restriction: Int
    hide_app: Boolean
    ignore_scrape: Boolean
    intense: Boolean
    loading_speed: String
    match_name: String
    name: String!
    no_service_animals: Boolean
    not_to_be_missed: Boolean
    open_emh_evening: Boolean
    open_emh_morning: Boolean
    open_not_so_scary: Boolean
    open_very_merry: Boolean
    opened_on: String
    operator_id: Int
    operator_type: String
    otherParkAttractions: [AttractionListItem]!
    park: String!
    park_entrance: Boolean
    physical_considerations: Boolean
    reflective_captioning: Boolean
    rider_swap: Boolean
    scope_and_scale_code: String
    seasonal: Boolean
    service_animal_check: Boolean
    short_name: String
    sign_language: Boolean
    single_rider: Boolean
    sort_name: String
    time_zone: String
    ultimate_code: String
    ultimate_task: String
    updated_at: String
    video_captioning: Boolean
    what_it_is: String
    wheelchair_transfer_code: String
    when_to_go: String
  }
`;

module.exports = typeDefs;
