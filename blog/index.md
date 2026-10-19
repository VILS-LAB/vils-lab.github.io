---
title: Updates
editorial: true
nav:
  order: 4
  tooltip: News from the laboratory
---
<section class="page-intro lab-shell"><div class="eyebrow">UPDATES / VILS LAB</div><h1>A lab in <em>motion.</em></h1><p>Notes, announcements, and new perspectives from the laboratory.</p></section>
<section class="page-content lab-shell">
{% if site.posts.size > 0 %}
{% for post in site.posts %}<article class="publication-entry"><span class="sub-label">{{ post.date | date: '%d %B %Y' }}</span><h2 style="margin-top:15px;font-size:30px"><a href="{{ post.url | relative_url }}">{{ post.title | escape }} ↗</a></h2><p>{{ post.excerpt | strip_html | truncate: 200 }}</p></article>{% endfor %}
{% else %}
<div class="empty-note"><div class="eyebrow" style="margin-bottom:16px">MORE TO COME</div><p>Future lab announcements, research notes, and events will appear here. You can also follow our work on GitHub.</p><a class="text-link" href="https://github.com/VILS-LAB">Follow VILS-LAB <span aria-hidden="true">↗</span></a></div>
{% endif %}
</section>
