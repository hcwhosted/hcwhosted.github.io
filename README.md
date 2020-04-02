# hcwhosted.github.io

a simple html website


## Development
To run locally:
```
git clone https://github.com/hcwhosted/hcwhosted.github.io.git
cd hcwhosted.github.io
npm install
npm run serve
```

**Managing the navbar**
Edit `views/Navbar/pages.json` to change the links at the top of the page, and
make sure to update `sitemap.xml` accordingly.

**Controllers, custom views**
Most pages should be able to just use `controllers/VanillaController.js`, that
manages the navbar at the top and the footer at the bottom (`<header>` and
`<footer>` tags are needed in the page's HTML for these to work).

The custom views in place (such as the header and footer) use the
[uki.js](https://github.com/alex-r-bigelow/uki/) MVC framework; using the
framework is optional, or feel free to include your own.

**`npm` libraries**
Feel free to `npm install --save` any libraries that you need, but you will also
need to edit `.gitignore` to specifically include the files that you actually
link to inside `node_modules` (so that we don't end up committing the whole
directory structure).
