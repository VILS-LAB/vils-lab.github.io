---
editorial: true
description: Exploring vision, intelligence, and the systems that connect them. Discover VILS Lab.
---
<section class="hero lab-shell">
  <div class="hero-copy">
    <div class="eyebrow"><span class="status-dot"></span> VISION INTELLIGENCE & LEARNING SYSTEMS</div>
    <h1>Learning to see.<br>Seeing <em>beyond.</em></h1>
    <p class="hero-description">From seeing in the dark to learning through interaction and reading the signals in code. Explore the research taking shape at VILS.</p>
    <div class="hero-actions"><a class="lab-button" href="{{ '/research/' | relative_url }}">Explore our research <span aria-hidden="true">↗</span></a><a class="quiet-link" href="{{ '/team/' | relative_url }}">Meet the people <span aria-hidden="true">→</span></a></div>
    <div class="hero-footnote"><span class="tiny-cross">+</span> Supervised by <a href="{{ "/members/arash-abdi.html" | relative_url }}">{{ site.supervisor }} ↗</a></div>
  </div>
  {% include home-research-showcase.html %}
</section>
<div class="discipline-strip lab-shell"><span>ONE LAB. CONNECTED PERSPECTIVES.</span><div>Computer vision <span>×</span> Reinforcement learning <span>×</span> Language models</div><a href="#research-areas" aria-label="Scroll to research areas">↓</a></div>
<section id="research-areas" class="research-section lab-shell">
  <div class="section-heading"><div><div class="eyebrow">01 / OUR FOCUS</div><h2>Curiosity, in every dimension.</h2></div><a class="text-link" href="{{ '/research/' | relative_url }}">Discover our research <span aria-hidden="true">↗</span></a></div>
  <div class="focus-grid">
    <a class="focus-card" href="{{ '/projects/#low-light-detection' | relative_url }}"><div class="card-top"><span>01</span><span aria-hidden="true">↗</span></div><div class="focus-art art-vision" aria-hidden="true"><div class="scan-frame"><i></i><i></i><i></i><i></i><span></span></div></div><div class="card-label">PERCEPTION</div><h3>Vision in low light</h3><p>Mohammad Hesam Ghasemi explores object detection with RL-guided enhancement.</p><span class="card-bottom">Explore the field <span aria-hidden="true">→</span></span></a>
    <a class="focus-card" href="{{ '/projects/#offline-to-online-rl' | relative_url }}"><div class="card-top"><span>02</span><span aria-hidden="true">↗</span></div><div class="focus-art art-learning" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div><div class="card-label">UNDERSTANDING</div><h3>Reinforcement learning</h3><p>Hesam Soleymani studies the transition from offline learning to online adaptation.</p><span class="card-bottom">Explore the field <span aria-hidden="true">→</span></span></a>
    <a class="focus-card" href="{{ '/projects/#llm-malware-detection' | relative_url }}"><div class="card-top"><span>03</span><span aria-hidden="true">↗</span></div><div class="focus-art art-systems" aria-hidden="true"><div class="system-core">+</div><span></span><span></span><span></span><span></span></div><div class="card-label">CONNECTION</div><h3>Language models & security</h3><p>Mojtaba Asadi explores malware detection with large language models.</p><span class="card-bottom">Explore the field <span aria-hidden="true">→</span></span></a>
  </div>
</section>
<section class="lab-perspective"><div class="lab-shell perspective-inner"><div class="eyebrow">02 / THE BIGGER PICTURE</div><div class="perspective-copy"><h2>From pixels<br>to <em>possibility.</em></h2><div><p>Intelligence begins with a different way of looking.</p><p>At VILS, vision and learning belong in the same conversation. Our laboratory brings these perspectives together to explore the foundations of intelligent systems.</p><a class="text-link" href="{{ '/research/' | relative_url }}">Inside our research <span aria-hidden="true">↗</span></a></div></div><div class="perspective-line"><span>INPUT / THE VISUAL WORLD</span><span class="line-dots" aria-hidden="true">· · · · · · · · · · · · · · · · · · · · · · · ·</span><span>OUTPUT / NEW UNDERSTANDING ↗</span></div></div></section>
<section class="home-people lab-shell"><div class="section-heading"><div><div class="eyebrow">03 / THE PEOPLE BEHIND THE IDEAS</div><h2>Different minds. Shared curiosity.</h2></div><a class="text-link" href="{{ '/team/' | relative_url }}">Meet our people <span aria-hidden="true">↗</span></a></div><p class="home-supervisor">Research under the supervision of <a href="{{ '/members/arash-abdi.html' | relative_url }}">{{ site.supervisor }} ↗</a></p><div class="researchers-grid">{% assign researchers = site.members | sort: 'position' %}{% for person in researchers %}{% unless person.role == 'supervisor' %}{% include person-card.html person=person %}{% endunless %}{% endfor %}</div></section>
<section class="connect-section lab-shell"><div><div class="eyebrow">LET’S EXPLORE WHAT’S NEXT</div><h2>New perspectives<br>start with a conversation.</h2></div><a class="lab-button" href="{{ '/contact/' | relative_url }}">Connect with VILS <span aria-hidden="true">↗</span></a></section>
