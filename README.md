
# ⛔️ This repo is not longer maintained ⛔️
---------------
#  Weblog


## Stack
- Jekyll
- Github pages
- AWS API Gateway
- AWS Lambda
- AWS S3
## Running locally
Build:
```
docker build -t jekyll .
```

Run:
```
docker run --rm -p 4000:4000 --entrypoint bash jekyll -c \
'bundler exec jekyll serve -H 0.0.0.0 -P 4000'
```

For development with live reload:
```
docker run -it --rm -v $(pwd):/app -p 4000:4000 -p 35729:35729 --entrypoint bash jekyll -c \
'bundler exec jekyll serve -H 0.0.0.0 -P 4000 --livereload'
```

See the preview [here](localhost:4000).

### TODO
- [x] Decide on a theme
- []  Implement the sendSearchTerm functionality
- [x] Dockerize the project
- [ ] Customize theme
- [x] Deploy theme
- [x] Enable SEO plugins
- [x] Create first blog post (english/german?)

Nice to have:
- [x] Store search terms

Fix:
- [] Address the broken header issue

Note: 
- Without any blog posts, the site may not fully function. 
