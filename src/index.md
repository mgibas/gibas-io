---
title: Maciej Gibas
header: partials/home-header.html
templateEngineOverride: njk,md
---

<section>
  <h2>Lets get in touch!</h2>
  {% import "partials/forms.html" as forms %}

{% call forms.form('contact', netlify=true, class='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8') -%}
{{ forms.field('full-name', autocomplet='name') }}
{{ forms.field('Email', autocomplet='email') }}
{{ forms.field('Message', type='textarea', rows='3', class='sm:col-span-2') }}
{{ forms.submit('Send', class='sm:col-span-2') }}
{%- endcall %}

  </form>
</section>
