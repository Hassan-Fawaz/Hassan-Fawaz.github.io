---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---
{% if site.author.googlescholar %}
  You can also find my articles on <u><a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

<div class="hf-topic-filter" id="hf-topic-filter">
  <button class="hf-chip is-active" data-topic="all">All</button>
  <button class="hf-chip" data-topic="Full-Duplex">Full-Duplex</button>
  <button class="hf-chip" data-topic="LoRaWAN">LoRaWAN</button>
  <button class="hf-chip" data-topic="Machine Learning">Machine Learning</button>
  <button class="hf-chip" data-topic="Game Theory">Game Theory</button>
  <button class="hf-chip" data-topic="Edge Computing">Edge Computing</button>
</div>

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

> **Note:** This material is presented to ensure timely dissemination of scholarly and technical work. Copyright and all rights therein are retained by authors or by other copyright holders. All persons copying this information are expected to adhere to the terms and constraints invoked by each author’s copyright. These works may not be reposted without the explicit permission of the copyright holder.
