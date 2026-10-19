---
title: Research
editorial: true
nav:
  order: 1
  tooltip: Research at VILS
---
<section class="page-intro lab-shell"><div class="eyebrow">RESEARCH / VILS LAB</div><h1>Looking closer.<br><em>Thinking further.</em></h1><p>Research in low-light object detection, reinforcement learning, and language models for malware detection, supervised by Dr. Arash Abdi.</p></section>
<section class="page-content lab-shell">
  <article class="research-row" id="computer-vision"><span class="row-number">01</span><h2>Vision in low light</h2><p>Mohammad Hesam Ghasemi explores object detection in low-light conditions, with reinforcement learning guiding image enhancement. The research connects enhancement decisions with the needs of the detector.</p></article>
  <article class="research-row" id="machine-learning"><span class="row-number">02</span><h2>Reinforcement learning</h2><p>Hesam Soleymani studies offline-to-online reinforcement learning: the transition from learning with stored experience to adapting through interaction with an environment.</p></article>
  <article class="research-row" id="intelligent-systems"><span class="row-number">03</span><h2>Language models & security</h2><p>Mojtaba Asadi explores malware detection with large language models, focusing on how code and behavioral information can support the analysis of potentially malicious software.</p></article>
  <div class="member-research-index"><div class="eyebrow">MEMBER-LED RESEARCH</div><h2>Meet the work in progress.</h2>{% for project in site.data.research-projects %}<a href="{{ '/projects/#' | append: project.id | relative_url }}"><span>{{ project.researcher }}</span><strong>{{ project.title }}</strong><span aria-hidden="true">↗</span></a>{% endfor %}</div><div class="publication-section" id="publications"><div class="eyebrow">THE RESEARCH RECORD</div><h2 style="margin-top:18px">Ideas, shared openly.</h2>
  {% if site.data.lab-publications.size > 0 %}
  <div class="publication-tools"><label class="sr-only" for="publication-search">Search publications</label><input id="publication-search" type="search" placeholder="Search title, author, or year"><span class="publication-count" aria-live="polite">{{ site.data.lab-publications.size }} publications</span></div>
  {% assign publications = site.data.lab-publications | sort: 'year' | reverse %}
  {% for paper in publications %}<article class="publication-entry"><h3><a href="{{ paper.link | escape }}">{{ paper.title | escape }} ↗</a></h3><p>{{ paper.authors | escape }}</p><span class="sub-label">{{ paper.venue | escape }} / {{ paper.year }}</span></article>{% endfor %}
  <p class="no-results" hidden>No publications match your search.</p>
  {% else %}
  <div class="empty-note"><p>The lab’s publication list will appear here as research is added. In the meantime, explore our open-source presence and connect with the team.</p><a class="text-link" href="https://github.com/VILS-LAB">Explore VILS on GitHub <span aria-hidden="true">↗</span></a></div>
  {% endif %}</div>
</section>
