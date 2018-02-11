# mi6softlab_site_v3

This is my redesigned websites. Data is organized in the JSON file instead updating data
on each page. Images are handled by `Cloudinary` which allows me to dynamically request optimized images.

JSON Data preview
```json
{
    "data": {
        "design": [{
                "title": "New Year 2018",
                "content": "https://res.cloudinary.com/mi6img/image/upload/c_scale,q_50,w_600/v1515484496/designs/84a6c860351615.5a492ceb6a470.png",
                "siteurl": "https://www.behance.net/gallery/60351615/Happy-New-Year-2018",
                "type": "image",
                "site": "Behance",
                "date": "2017-12"
            },
            {
                "title": "Nature Photography",
                "content": "https://res.cloudinary.com/mi6img/image/upload/c_scale,q_50,w_450/v1515541284/mahesh-ranaweera-493850_vnch7n.jpg",
                "siteurl": "https://unsplash.com/@mi6softlab",
                "type": "image",
                "site": "Unsplash",
                "date": "2017-12"
            }],
        "dev": [{
                "title": "QHacks 2018: GeoTourist",
                "date": "2018-04",
                "desc": [
                    "Description
                ],
                "codeassets": ["NodeJS", "Microsoft Azure", "Google Map Api", "JS", "StdLib", "Compass", "Device Orientation", "Pug", "CSS", "Express"],
                "previews": [
                    "https://res.cloudinary.com/mi6img/image/upload/c_scale,h_600/v1518107718/gallery_laydhl.jpg"
                ],
                "links": {
                    "github": "https://github.com/Mahesh-Ranaweera/qhacks",
                    "youtube": "https://youtu.be/aJ8B0QjJwpM",
                    "vimeo": "",
                    "website": "https://devpost.com/software/geotourist",
                    "mobile": "https://geotourist.tech/"
                }
              }]
```
