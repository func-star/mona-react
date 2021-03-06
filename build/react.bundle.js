const pkg = require('../package.json')
const { exec } = require('child_process')
const { saveConfig, log } = require('./util')

const { version, author, email, description, keywords, repository, files, main } = pkg

const packageJsonPath = `${process.cwd()}/react/package.json`

saveConfig({
	version,
	author,
	email,
	description,
	keywords,
	repository,
	files,
	main
}, packageJsonPath)

const babelCmd = 'rm -rf package&&cp -r react package&&babel react --out-dir package'
exec(babelCmd, (error, stdout) => {
	if (error) {
		log.error(error)
	} else {
		log.info(stdout)
		log.success('生成package成功！')
	}
})
