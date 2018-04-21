const path = require('path')
const fs = require('fs-extra')
const markdown = require('markdown').markdown
const glob = require('glob')
const conf = require('./content/config.json') || {}

// Find all markdown files in a directory tree

// Convert all markdown into a static html directory tree in docs

// Copy style/index.css to docs/index.css
// All generated HTML files should link this css file

const head = `
<!doctype html>
<html>
<head>
  <title>${conf.title}</title>
  <style>
    * { font-family: sans; }
    body {
      padding: 2rem;
      background-color: #f8f8f8;
    }
  </style>
</head>
<body>`
const uplink = `<a href='../'>^ Up</a>`
const footer = `</body></html>`

glob('content/**/*', function (err, files) {
  if (err) throw err
  files.forEach(function (inPath) {
    const ext = path.extname(inPath)
    const outDir = path.dirname(inPath).replace(/^content/, 'docs')
    if (ext === '.md') {
      compileMarkdown(inPath, outDir)
    } else if (ext) {
      copyAsset(inPath, outDir)
    }
  })
})

function copyAsset (inPath, outDir) {
  fs.copy(inPath, outDir + '/' + path.basename(inPath), function (err) {
    if (err) throw err
  })
}

function compileMarkdown (inPath, outDir) {
  const name = path.basename(inPath, '.md')
  const inDir = path.dirname(inPath)
  fs.readFile(inPath, 'utf-8', function (err, contents) {
    if (err) throw err
    let html = head + markdown.toHTML(contents)
    if (inDir !== 'content') {
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
}

fs.copy('./index.css', './docs/index.css', function (err) {
  if (err) throw err
})
