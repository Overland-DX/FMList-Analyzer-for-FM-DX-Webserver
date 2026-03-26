// Plugin configuration, this is used in the administration when plugins are loaded
var pluginConfig = {
    name: 'My Logs(FMList Log Explorer)',
    version: '1.0',
    author: 'ODX',
    frontEndPath: 'my-logs-plugin/my_logs_plugin.js'
}

// Backend (server) changes can go here...

// Don't change anything below here if you are making your own plugin
module.exports = {
    pluginConfig
}
