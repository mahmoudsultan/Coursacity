# Coursacity

Simple Courses CRUD Web App with Vuejs, Ruby on Rails, Course Thumbnail Preprocessing, Bundle gzip compression and Code splitting.

Features: 
- View Courses with pagination and variable page size
- Create new course with photo attachment
- View a Course
- Delete Courses
- Search in Course title

*Check each folders README for details on each component separately*

## Docker Compose

Build and Run Project using Docker Compose:

```
docker-compose up
```

Then access Web App on `localhost:5000`


## Notes & Todos:

### .env
I've included the .env in git because currently there's no secrets in this file, however, I normally include a `.env.example` which has only the variables name which is the best practise.

### Courses Thumbnail
I've used RoR ActiveStorage variants API to create a 320x240 course thumbnail to avoid loading the original file in courses index as this will lead to large network payload.

I'm also currently handling this by lazy loading, and vuetify helps as well with lazy loading and image placeholder, but for production projects I'd work on making multiple variants for different resolutions and using a CDN.


### Notifications and Error Handling
For simplicity I've used a one snackbar implementation of error notification, this can be changed by making snackbar in the store of type array instead and handling timing out and margins.

### Slugs
Currently courses slugs are not used, I'd assume that it was meant to be used for indexing courses, this can be easily established either by a gem, or simply querying on the slug field. **and an index on slug will be needed**.

### Courses Description
For simplicity, I'm currently rendering descriptions as simple text and not handling either markdown nor html, many packages exist and vue has a `<v-html>` tag but this will require sanitizing to prevent XSS.

### Courses Search
Currently, I'm only searching using a simple LIKE query on titles, an extention to this is to use Fulltext search services e.g. ElasticeSearch, Algolia, etc.
