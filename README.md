# Unofficial GraphQL Disney API 2.0.0

Created by [Matthew Groff](https://github.com/mattlgroff) using the [TouringPlans.com](https://touringplans.com/api) Disney API v1.

Changelog
2.0.0 - Moved into Apollo Azure Function

[See a demo](https://apollo-touringplans.azurewebsites.net/graphql)

To run:
`func host start`

## Example Queries

### Sample Query for Park Attractions

```
# Give me all attractions in EPCOT and include the name and height restriction
query {
  parkAttractions(name: epcot){
    name
    detail {
      height_restriction
    }
  }
}
```

### Sample Response for Park Attractions

```
{
  "data": {
    "parkAttractions": [
      {
        "name": "Agent P's World Showcase Adventure",
        "detail": {
          "height_restriction": null
        }
      },
      {
        "name": "Mission: SPACE Orange",
        "detail": {
          "height_restriction": 44
        }
      },
    ]
  }
}
```

### Sample Query for Park Dining

```
# Give me all dining locations in EPCOT and include the name, category_code, and cuisine
query {
  parkDining(name: epcot){
    name
    category_code
    cuisine
  }
}
```

### Sample Response for Park Dining

```
{
  "data": {
    "parkDining": [
      {
        "name": "La Cantina de San Angel",
        "category_code": "counter_service",
        "cuisine": "Mexican"
      },
      {
        "name": "Electric Umbrella",
        "category_code": "counter_service",
        "cuisine": "American"
      },
    ]
  }
}
```
