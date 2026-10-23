---
title: People
editorial: true
nav:
  order: 3
  tooltip: Meet our people
---
<section class="page-intro lab-shell"><div class="eyebrow">PEOPLE / VILS LAB</div><h1>Shared curiosity.<br><em>Individual perspectives.</em></h1><p>Meet the people exploring computer vision, reinforcement learning, and language models for cybersecurity.</p></section>
<section class="team-content lab-shell"><a class="supervisor-banner" href="{{ '/members/arash-abdi.html' | relative_url }}"><div class="profile-avatar"><img src="/images/team/abdi.jpg" /></div><div><span class="eyebrow">LABORATORY SUPERVISOR</span><h2>{{ site.supervisor }}</h2><p>Vision Intelligence and Learning Systems Laboratory</p></div><span class="supervisor-arrow" aria-hidden="true">↗</span></a><div class="section-heading team-heading"><div><div class="eyebrow">THE RESEARCH TEAM</div><h2>People behind the projects.</h2></div><a class="text-link" href="{{ '/projects/' | relative_url }}">Explore their work <span aria-hidden="true">↗</span></a></div><div class="researchers-grid">{% assign researchers = site.members | sort: 'position' %}{% for person in researchers %}{% unless person.role == 'supervisor' %}{% include person-card.html person=person %}{% endunless %}{% endfor %}</div></section>
