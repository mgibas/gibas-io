---
title: Maciej Gibas
header: partials/home-header.html
templateEngineOverride: njk,md
---

{% import "partials/forms.html" as forms %}
{% import "partials/timeline.html" as timeline %}

## About me

Hi! As you already know I'm Maciej Gibas, I know something about software and a little bit more about web development.
Beyond these boring technical aspects I love brewing a ☕ coffee, bake a 🍞 bread (yes, pandemic) and spend time with my loved ones.

## Experience

I started my career in 2007, straight out of high school, and since then worked in many environments, teams and projects.
I won't go to details and _names_ in here but instead will try to present everything in a meaningful timeline so you can have a big picture.

{{ timeline.timeline(experience) }}

## Lets get in touch!

<div class="grid gap-4 sm:grid-cols-2">
  <span>
    I'm not giving my e-mail just like that, but if you want to get in touch please use this form 🙂
  </span>

{% call forms.form('contact', netlify=true, class='grid grid-cols-1 gap-y-6 sm:gap-x-8') -%}
{{ forms.field('Full name', autocomplet='name') }}
{{ forms.field('Email', autocomplet='email') }}
{{ forms.field('Message', type='textarea', rows='3') }}
{{ forms.submit('Send') }}
{%- endcall %}

</div>
