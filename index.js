const path = require('path')
const fs = require('fs-extra')
const markdown = require('markdown').markdown
const glob = require('glob')
const conf = require('./content/config.json') || {}

// Find all markdown files in a directory tree

// Convert all markdown into a static html directory tree in docs

// Copy style/index.css to docs/index.css
// All generated HTML files should link this css file

const head = `<!doctype html><html><head><title>${conf.title}</title><link rel='stylesheet' type='text/css' href='/index.css'></head><body>`
const uplink = `<a href='../'>^ Up</a>`
const footer = `</body></html>`

glob('content/**/*.md', function (err, files) {
  if (err) throw err
  files.forEach(function (inPath) {
    const dir = path.dirname(inPath)
    const outDir = dir.replace(/^content/, 'docs')
    const name = path.basename(inPath, '.md')
    fs.readFile(inPath, 'utf-8', function (err, contents) {
      if (err) throw err
      let html = head + markdown.toHTML(contents)
      if (dir !== 'content') {
        html += uplink
      }
      html += footer
      fs.ensureDir(outDir, function (err) {
        if (err) throw err
        fs.writeFile(outDir + '/' + name + '.html', html, function (err) {
          if (err) throw err
        })
      })
    })
  })
})

fs.copy('./index.css', './docs/index.css', function (err) {
  if (err) throw err
})
