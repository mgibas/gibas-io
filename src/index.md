---
title: Maciej Gibas
header: partials/home-header.html
templateEngineOverride: njk,md
---

{% import "partials/forms.html" as forms %}

## About me

Hi! As you already know I'm Maciej Gibas, I know something about software and a little bit more about web development.
Beyond these boring technical aspects I love brewing a ☕ coffee, bake a 🍞 bread (yes, pandemic) and spend time with my loved ones.

## Experience

I started my career in 2007, straight out of high school, and since then worked in many environments, teams and projects.
I won't go to details and _names_ in here but instead will try to present everything in a meaningful timeline so you can have
overall picture

### 2007 - 2011

I finished my high school and right away found a job within my field (sort of) - mostly working with proprietary electronics, clients and
customer service. At the same time I started my bachelor degree in computer science and started working on different projects
(web, desktop) on my own. 2009 was the first time I got full time job as a software engineer and thanks to all the effort I put in
my free time I quickly transition to **senior software engineer**. I have a lot of found memories from this period and one thing that I'll
never forget is growth rate - I was learning **C#**, **Visual Basic**, **relational databases**, **software design** and
**architecture** in such a rate that I don't think it will ever happen again! On top of that I was studding during weekends and continuing
my personal projects or little bit of freelancing. In short these years where all about growth and fundamentals.

### 2011 - 2012

Big year in my career - I got a job in Florida based company and back in the days that meant I need to move there with my family. Me and my
wife packed our bags and went head first into the adventure. I was very lucky, it was yet another rapid growth phase for my career.
People I worked with taught me a lot about **architecture**, **design**, **TDD**, **extreme programming**, **web development**,
**enterprise software**, **metadata driven architecture**, **processes**, **agile**, **collaboration** and development in general. Everything I learned in previous years
felt like some amateur skills, these guys where doing real sh\*t I thought, I looked up to them and learned a lot. Some of them are my
programming gurus to this day. That was also a period where I shifted more to web development and felt much more comfortable with things
like **ASP.Net**, **HTML**, **CSS**, **JS** and **jQuery**, **dev ops**.

### 2012 - 2015

Immigrant life prove to be more challenging than me and my wife assumed and after a year of living in Florida we moved back to Poland.
To be honest, it wasn't particularly exciting time for my career, I worked in two companies, one of them with over 100k employees around
the world, but It wasn't anything that I was hoping for. I learned a lot about specifics of work for giant corporation, designing and
working with **micro service architecture** and I met a lot of great people during that time and grown my **soft skills**.
I felt like I'm missing something and I did what I do most of the time in situations like that - I needed to fill that vacuum with
something productive.

It was a time when JS ecosystem and libraries like Require, Knockout and **AngularJS** gained a lot of traction. AngularJS was my bet at that
time and it was entirely new world for me - it was a first time in my career where I worked with a frontend that is entirely decoupled
from backend and only thing that connects them is simple JSON. I spent a lot of time working in that setup, mostly on my personal projects
(all of them shared same faith - collecting dust) and little bit of freelancing. That was a time where I uplevel my skills regarding
**REST**, **data contracts** and how to successfully structure and manage frontend projects. This was my final shift to frontend development.

### 2015 - 2018

Florida called again! We packed our bags and went there one more time. Same company I worked for in 2011, same office, almost the same
people. This time around I knew I want to do frontend so in 2016 I joined small team that was tasked to created a new product - I was
frontend developer. This project and first and foremost this team was exceptional. I learned a ton about **frontend development**
(we used **Polymer** at that time...yes, I know...) **CSS**, **JavaScript**, **WebComponents**, **micro services**, **AWS**,
**Document database**, **frontend performance**, **user experience**, **accessibility**. I had some of these skills before, but this
time around I had to uplevel everything and bring my best every day.

End of that period I decided to try my chances in design - I was yet again very lucky and got the best team I could dream of. This was
almost entirely new field for me so I had to learn really fast. I learned a lot about **application design**, **user experience**,
**usability**, **components design**, **typography** and many other aspects of design in general. At that time we started working on
a **design system** from a ground up so I had to juggle between designer and developer hat - I had to implement components that we designed
together.

That was a time where home sick kicked in again and, like previously, me, my wife and our kids, we packed the bags and went back to Poland.

### 2018 - 2021

This is my self-employment period - I continue working as a designer/developer. This is a time where I learn much more about **working
with client**, **efficiency**, **quality** and fast **delivery**. Most of my time I spent working with my key US client, so
**time management** and **remote** setup was really important. I really like design and I felt like I'm growing every day but eventually
I lean more towards frontend development and that becomes my main concern. I do a lot of work around **web components**,
**frontend architecture**, **VueJS**, **design systems** and scaling all of that on growing team of my client.

### 2021 - Now

Guess what? Yes, yet again, we packed our bags and we're back in Florida. My career took unexpected shift and I became Frontend Lead
Engineer. I switched from individual contributor to **manager** role and yet again I have tons of stuff to learn. This still feels new
to me but I've been very lucky (again!) and had a great mentors on the way. I'm learning a lot about **team building**, **mentoring**,
**coaching**, **resiliency**, **conflict resolutions**, **time management**, **task assignment**, **strategy**, **planing** and in
general **listening** and working with **people**. On top of that I'm not slowing down as a developer - this is something that got me
here and I still love creating.

## Lets get in touch!

<div class="grid gap-4 sm:grid-cols-2">
  <span>
    Hey! I'm not giving my e-mail just like that, but if you want to get in touch please use this form.
  </span>

{% call forms.form('contact', netlify=true, class='grid grid-cols-1 gap-y-6 sm:gap-x-8') -%}
{{ forms.field('Full name', autocomplet='name') }}
{{ forms.field('Email', autocomplet='email') }}
{{ forms.field('Message', type='textarea', rows='3') }}
{{ forms.submit('Send') }}
{%- endcall %}

</div>
