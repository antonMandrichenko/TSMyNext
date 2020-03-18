export interface ImagesOptions {
  [key: string]: (id: string) => any
}

const images: ImagesOptions = {
  bower: require('./bower.png'),
  express: require('./express.png'),
  git: require('./git.png'),
  handlebars: require('./handlebars.png'),
  next: require('./next.png'),
  node: require('./node.png'),
  eslint: require('./eslint.png'),
  nginx: require('./nginx.png'),
  heroku: require('./heroku.png'),
  gulp: require('./gulp.png'),
  circleCi: require('./circleCi.png'),
  babel: require('./babel.png'),
}

export default images
