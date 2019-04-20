const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    dest : 'blog', 
    repo: 'https://github.com/josesalasni/josesalasni.github.io',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
