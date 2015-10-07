RTE.classes >
RTE.classes {
  lead {
    name = Introduction
  }
}

RTE.default {
  proc.allowedClasses >
  proc.allowedClasses = lead
  buttons {
    blockstyle.tags {
      div.allowedClasses = lead
    }
  }
  contentCSS = fileadmin/templates/extensions/direct_mail/hero-email-template/stylesheets/email.css
  showTagFreeClasses = 0
  enableWordClean = 1
  useCSS = 0
}

RTE.default.FE < RTE.default
RTE.default.FE.FE >

RTE.config.tt_content.bodytext.proc.allowedClasses = lead
