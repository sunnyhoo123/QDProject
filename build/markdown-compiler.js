var hljs = require("highlight.js");
var markdown = require("markdown-it");

module.exports = function(source) {
  this.cacheable && this.cacheable();

  var parser = markdown({
    highlight: function(str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return "<pre class=\"hljs\"><code>" + hljs.highlight(lang, str, true).value + "</code></pre>";
        } catch (__) {
          console.error(__)
        }
      }

      return "<pre class=\"hljs\"><code>" + str + "</code></pre>";
    },
    html: true,
  });

  var content = parser
    .render(source.replace(/@/g, "__at__"))
    .replace(/__at__/g, "@")
    .replace(/(<pre)/g, "$1 v-pre");

  var html = "";
  if (!this.resourceQuery.includes("raw")) {
    var matched = source.match(/```\s*html((?:[\s\S])+?)```/);

    if (matched) {
      html = matched[1].replace(/(<template[\s\S]*<\/template>)/, "");
      var template = RegExp.$1;
      content = content.replace("<pre", `<h2>Example:</h2><div class="demo-template">${template}</div><h2>Code:</h2>` + "<pre");
    }
  }

  var result = `<template>
  <div>
    ${content}
  </div>
</template>
${html}`;
  // require("fs").writeFileSync(this.resourcePath + ".txt", result);
  return result;
};
