# Unofficial GraphQL Disney API

Created by [Matthew Groff](https://github.com/mattlgroff) using the [TouringPlans.com](https://touringplans.com/api) Disney API v1.

[See a demo](https://disney-graphql.herokuapp.com/)

## Example Queries
```
# Give me all attractions in the Magic Kingdom and include the name and height restriction
query {
  parkAttractions(name: magicKingdom){
    name
    detail {
      height_restriction
    }
  }
}
```

```
# Give me all dining locations in EPCOT and include the name, category_code, and cuisine
query {
  parkDining(name: magicKingdom){
    name
    category_code
    cuisine
  }
}
```