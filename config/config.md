# Styleguide options

### Head

    meta(name="viewport" content="width=device-width, initial-scale=1")
    link(rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css')
    link(rel="stylesheet" href="../css/main.css")
    link(rel="stylesheet" href="../css/_extras.css")
    link(rel='stylesheet' href='https://cdn.rawgit.com/styledown/styledown/v1.0.2/data/styledown.css')
    script(src='https://cdn.rawgit.com/styledown/styledown/v1.0.2/data/styledown.js')

### Body
    .jumbotron.jumbotron-styleguide
      .container
        h1 Your styleguides
        p
          | This is a sample styleguide for Bootstrap that was generated using
          | Styledown, a styleguide generator. They were taken from inline comments
          | in the CSS.
        p
          a.btn.btn-default(href="https://github.com/styledown/styledown") About Styledown
          a.btn.btn-default(href="https://github.com/styledown/styledown/tree/master/examples/bootstrap") See sources
    .container
      div#styleguides(sg-content)