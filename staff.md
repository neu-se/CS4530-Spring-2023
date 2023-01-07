---
layout: page
title: Staff
description: A listing of all the course staff members.
nav_order: 6
---

# Staff

## Office Hours 
All TA office hours will be held virtually. We will explore the option of holding in-person office hours too, subject to interest from students/TAs and availability of a room. Instructor office hours may be held in-person or remotely.  

Links to join the TA and instructor office hours are [posted in Canvas](https://northeastern.instructure.com/courses/133054/pages/office-hours).
## Instructors

{% assign instructors = site.staffers | where: 'role', 'Instructor' %}
{% for staffer in instructors %}
{{ staffer }}
{% endfor %}

{% assign teaching_assistants = site.staffers | where: 'role', 'Teaching Assistant' %}
{% assign num_teaching_assistants = teaching_assistants | size %}
{% if num_teaching_assistants != 0 %}
## Teaching Assistants
{% include officeHours.html %}

{% for staffer in teaching_assistants %}
{{ staffer }}
{% endfor %}
{% endif %}

