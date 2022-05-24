---
title: Message sent
templateEngineOverride: njk,md
---

{% import "partials/messages.html" as messages %}

{{ messages.success(title, "Thanks for the message - I'll get back to you as soon as I can.", '/') }}
