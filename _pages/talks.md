---
layout: archive
title: "Projects"
permalink: /talks/
author_profile: true
---

{% include base_path %}

A selection of research and engineering projects I have worked on, from my current role in the space industry back to my Ph.D. and engineering studies.

{% assign projects = site.talks | sort: "order" %}
{% for post in projects %}
  {% include archive-single.html %}
{% endfor %}

