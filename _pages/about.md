---
permalink: /
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<section class="hf-hero" markdown="0">
  <button id="hf-lang-toggle" class="hf-lang-toggle" type="button"><span class="lang-en">FR</span><span class="lang-fr">EN</span></button>
  <p class="hf-hero-kicker"><span class="lang-en">5G Software Architect · Ground Segment Engineer · Ph.D.</span><span class="lang-fr">Architecte Logiciel 5G · Ingénieur Segment Sol · Docteur</span></p>
  <h1 class="hf-hero-title">Hassan Fawaz</h1>
  <p class="hf-hero-tag"><span class="lang-en">Building next-generation space infrastructure at Univity — from 5G core networks and RAN to satellite ground segments. Before that, a decade of research on full-duplex wireless networks, LoRaWAN, and machine learning for networking.</span><span class="lang-fr">Je conçois la nouvelle génération d'infrastructure spatiale chez Univity — du cœur de réseau 5G et du RAN au segment sol. Auparavant, une décennie de recherche sur les réseaux full-duplex, LoRaWAN et l'apprentissage automatique pour les réseaux.</span></p>
  <div class="hf-hero-cta">
    <a class="hf-btn hf-btn-primary" href="{{ '/publications/' | absolute_url }}"><i class="fas fa-book-open"></i><span class="lang-en">View Publications</span><span class="lang-fr">Voir les publications</span></a>
    <a class="hf-btn hf-btn-primary" href="{{ '/files/CV.pdf' | absolute_url }}"><i class="fas fa-file-pdf"></i><span class="lang-en">Download CV (PDF)</span><span class="lang-fr">Télécharger le CV (PDF)</span></a>
  </div>
  <ul class="hf-hero-stats">
    <li>18 publications</li>
    <li>Ph.D. Wireless Communications, 2019</li>
    <li>Île-de-France, France</li>
  </ul>
</section>

<div style="text-align: justify;" class="lang-en">
Hello and welcome to my personal website. My name is Hassan Fawaz. I am a 5G Software Architect and Ground Segment Engineer, specializing in the domain of telecommunications. Here's a brief overview of my academic and professional journey:
</div>
<div style="text-align: justify;" class="lang-fr">
Bonjour et bienvenue sur mon site web personnel. Je m'appelle Hassan Fawaz. Je suis architecte logiciel 5G et ingénieur segment sol, spécialisé dans le domaine des télécommunications. Voici un aperçu de mon parcours académique et professionnel :
</div>

## <span class="lang-en">Featured Publications</span><span class="lang-fr">Publications sélectionnées</span>

<div class="hf-featured-grid">
{% assign featured = site.publications | where: "featured", true | sort: "date" | reverse %}
{% for post in featured %}
  <a class="hf-featured-card" href="{{ post.url | absolute_url }}">
    <span class="hf-featured-venue">{{ post.venue }}</span>
    <span class="hf-featured-title">{{ post.title }}</span>
    <span class="hf-featured-year">{{ post.date | date: "%Y" }}</span>
  </a>
{% endfor %}
</div>

## <span class="lang-en">News</span><span class="lang-fr">Actualités</span>

<ul class="hf-news">
  <li><strong>2024</strong> — Joined Univity as 5G Software Architect and Ground Segment Engineer, working on satellite ground segments and 5G non-terrestrial networks.</li>
  <li><strong>Sep 2024</strong> — Paper on edge selection games in IoT edge computing presented at <em>IEEE PIMRC 2024</em>.</li>
  <li><strong>May 2024</strong> — Paper on federated learning edge server selection presented at <em>IEEE NOMS 2024</em>.</li>
  <li><strong>2023</strong> — Journal paper on full-duplex multi-cellular resource allocation published in <em>IEEE JSAC</em>.</li>
  <li><strong>2023</strong> — Papers on graph convolutional reinforcement learning at <em>IFIP Networking</em> and in <em>IEEE TNSM</em>.</li>
</ul>

## <span class="lang-en">Education</span><span class="lang-fr">Formation</span>


### Diploma in Electrical and Electronic Engineering
<div style="text-align: justify;">
In 2015, I graduated with an Engineering degree in Electrical and Electronic Engineering (Computer and Communications) from the Lebanese University in Beirut, Lebanon. My final year project focused on direction of arrival estimation for smart antennas in a multi-path environment.
</div>


### M2 Telecom Networks and Security
<div style="text-align: justify;">
Following my undergraduate studies, I pursued my M2 degree in Telecom Networks and Security in 2016 from Saint Joseph University of Beirut and the Faculty of Engineering at the Lebanese University. My master's thesis research was centered around scheduling in full-duplex wireless networks, exploring various algorithms for scheduling in full-duplex OFDMA networks.
</div>


### Ph.D. in Wireless Communications
<div style="text-align: justify;">
At the end of 2016, I was awarded a Doctoral Fellowship from the National Council for Scientific Research – Lebanon (CNRS-L). As such, I continued my research on full-duplex wireless networks. Over the course of three years, my research addressed several critical issues in the domain, including user fairness, spectral efficiency, and CSI availability.
</div>

## <span class="lang-en">Professional Experience</span><span class="lang-fr">Expérience professionnelle</span>


### Postdoc at Université de Versailles Saint-Quentin-en-Yvelines - Paris Saclay
<div style="text-align: justify;">
Following the completion of my Ph.D., I embarked on a one-year postdoctoral fellowship at UVSQ, Paris-Saclay, France. During this tenure, my research focused on Internet of Things (IoT) networks, particularly LoRaWAN. Leveraging recurrent neural networks, we proposed spreading factor assignment algorithms to optimize packet delivery rates in multi-operator environments.
</div>


### Research Engineer at Télécom SudParis - IP Paris
<div style="text-align: justify;">
From the end of 2020 until August 2024, I worked as a research engineer at Télécom SudParis, Palaiseau, France. Initially, my work revolved around proposing multi-agent deep learning-based solutions for load balancing and queue management in networks. Afterwards, I was involved in projects related to 5G New Radio systems, leveraging ns3-based Lena NR module and state-of-the-art 5G emulators such as Open5gs and UERANSIM.
</div>


### Ground Segment Engineer at UNIVITY - Paris
<div style="text-align: justify;">
In 2024, I joined Univity, a company whose objective is building the next-generation space infrastructure to provide high-speed, low-latency connectivity worldwide. I joined Univity as 5G Software Architect and Ground Segment Engineer, working on the company's various demonstration programs. My working topics include Univity's 5G core network and RAN, ground segment definition and validation, system security, and others.
</div>
