---
permalink: /
title: "Hassan Fawaz, Research Engineer"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Hello and welcome to my personal website. My name is Hassan Fawaz. I am a research engineer in the domain of telecommunications. I got my engineering degree in Electrical and Electronic Engineering (Section: Computer and Communications) in 2015 from the Lebanese Univerisity in Beirut, Lebanon. I got my M2 degree in Telecom Networks and Security in 2016 jointly from Saint Joseph University of Beirut and the Faculty of Engineering at the Lebanese University. Afterwards, I started my Ph,D. in the domain of full-duplex wireless communications which I successfully defended at the end of 2019. In 2020, I was a post-doc researcher at the University of Versailles, France with my work revolving around the Internet-of-Things and LoRa networks. Since the end of 2020, I have been working as research enginner at Telecom SudParis, Palaiseau, France.

Diploma in Electrical and Electronic Engingeering
======
In 2015, I received my Engineering diploma from the Lebanese University in Beirut. The degree was in Electrical and Electronic Engineering with focus on Telecommunications. My final year project revolved around direction of arrival estimation for smart antennas in a multi-path environment. A Matlab-based simulator for different state-of-the-art proposals was developed and the viability of different methods with respect to the simulated enviroment was discussed.


M2 Telecom Networks and Security
======
After receiving my Engineering Diploma in 2015, I received my M2 in Telecom Networks and Security in 2016 from the faculty of engineering (ESIB) at Saint Joseph University of Beirut. My master's thesis research work revolved around scheduling in full-duplex wireless networks. I studied different propositions of full duplex network implementations, and proposed multiple algorithms for scheduling in full-duplex OFDMA networks. The work was implemented in a Matlab-based simulator and focused on Monte Carlo methods to assess performance. Parts of this work was published at the ISCC 2017 conference under the title "Max-SINR Scheduling in FD-OFDMA Cellular Networks with Dynamic Arrivals".


Ph.D. in Wireless Communications 
======
At the end of 2016, I was awarded a Doctoral Fellowship from National Council for Scientific Research – Lebanon (CNRS-L). 

Site-wide configuration
------
The main configuration file for the site is in the base directory in [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header. 

Create content & metadata
------
For site content, there is one markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

I have also created [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the academicpages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
------
Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons. 

Example: editing a markdown file for a talk
![Editing a markdown file for a talk](/images/editing-talk.png)

For more info
------
More info about configuring academicpages can be found in [the guide](https://academicpages.github.io/markdown/). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful.
