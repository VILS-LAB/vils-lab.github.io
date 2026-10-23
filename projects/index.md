---
title: Projects
editorial: true
nav:
  order: 2
  tooltip: People and research projects
---
<section class="page-intro lab-shell projects-intro"><div class="eyebrow">PROJECTS / PEOPLE-LED RESEARCH</div><h1>Different questions.<br><em>Connected thinking.</em></h1><p>Explore the research of Mohammad Hesam Ghasemi, Hesam Soleymani, and Mojtaba Asadi — under the supervision of <a href="{{ '/members/arash-abdi.html' | relative_url }}">{{ site.supervisor }}</a>.</p><nav class="project-jump-nav" aria-label="Jump to a research project">{% for project in site.data.research-projects %}<a href="#{{ project.id }}"><span>{{ project.number }}</span>{{ project.researcher }} <span aria-hidden="true">↘</span></a>{% endfor %}</nav></section>
<section class="projects-content lab-shell">{% for project in site.data.research-projects %}{% include project-feature.html project=project instance='projects' %}{% endfor %}</section>
<section class="project-open-source lab-shell"><article class="resource-card"><span class="resource-icon" aria-hidden="true">&lt;/&gt;</span><div><div class="eyebrow">CODE & RESOURCES</div><h2 style="margin-top:12px">Explore VILS-LAB on GitHub.</h2><p>Browse the lab’s public repositories and follow its open-source work.</p></div><a class="lab-button" href="https://github.com/orgs/VILS-LAB/repositories">Browse repositories <span aria-hidden="true">↗</span></a></article></section>
