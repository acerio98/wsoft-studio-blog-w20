---
title: "Design Expo Reflection"
layout: post

# optional alternate title to replace page.title at the top of the page
#alt_title: "Basically Basic"

# optional sub-title below the page title
sub_title: "Looking Back on the Semester"

# optional intro text below titles, Markdown allowed
#introduction: |


# optional call to action links
#actions:
#  - label: "Learn More"
#    icon: github  # references name of svg icon, see full list below
#    url: "http://url-goes-here.com"
#  - label: "Download"
#    icon: download  # references name of svg icon, see full list below
#    url: "http://url-goes-here.com"

image:  # URL to a hero image associated with the post (e.g., /assets/page-pic.jpg)

# post specific author data if different from what is set in _config.yml
author:
  name: Austin Riopelle
#  twitter: johndoetwitter

comments: false  # disable comments on this post
---
Today I presented Project Rodin at the Fall 2019 U-M Eningeering Design Expo and had the opportunity to share my findings with the general public.

Over the past week since my last blog post, I completed several additional tasks, the most important of which was changing the VAE architecture to a vector-quantized variational autoencoder (VQ-VAE) that allowed me to get accurate reconstructions and thus decent samples from the learned embedding space. I used these new results to put on my poster that I presented.

With my poster complete, today I spent the afternoon in the atrium of the computer science building along with other students in the EECS 499 course I have been a part of this semester. I enjoyed being able to explain what I had done to the community and hear feedback on my work.

![Presentation poster](http://project-rodin.org/pics/poster.png)

Here I will describe some of the reactions I got from the various people I got to talk with today at the expo.

## Expo Feedback

Over the course of the afternoon I had about fifteen individuals approach me to talk about Project Rodin. I explained the rationale for the project, the dataset I used, the network architecture and training process, as well as the final results I obtained, including generated samples.

Everyone I spoke with seemed to readily understand the application space of generating 3D models for video games. I had a pretty good mix of experience levels in the individuals I talked to, so some wanted to dive deep into the architecture details while others were less interested. Whether or not they fully understood all the details of the architecture, everyone at least seemed to appreciate its complexity and was impressed at what I accomplished in that regard.

Some of the more interesting technical conversations I had included:
- Questioning the size of the dataset and why I couldn't get more sword training data. (In practice, I couldn't find much more than what I found on the one website I was using to get data).
- Why I used point clouds as input instead of voxel grids as input, where I explained how they take more memory for less resolution.
- Asking whether the learned "dictionary" for the embedding space in the vector-quantized layer limited the range of outputs to just those coming from those in the dictionary. This was the most sophisticated question I received and I didn't even know quite enough about the details of the VQ-VAE architecture to fully answer.
- Thoughts on whether one could train the network to learn specific ways of parameterizing the parameters, such that one could ensure that certain elements represented certain visual features so one could adjust them for a downstream application. This would be hard in practice but I thought it was a very interesting concept.

I enjoyed hearing all of these different questions, some of them about points I had not considered before. The last point in particular points at new ideas for ways to extend the project.

## Final Thoughts

Overall, I was happy to see so many people excited by the potential of my project, even if at the end my network did not give super-realistic synthesized meshes of swords that I wanted it to. Many individuals expressed how interesting the technology was to them, with some even professing how useful it would be for themselves as a game developer. I was glad to hear that my project if continued has the potential to be truly impactful and become useful for different people.

On this note, at the end of this semester I am satisfied with what I was able to accomplish in these three months, but am also looking at ways I can keep the project going into the future. While I may not continue to work as intensely as I have these past few weeks, I think there is still enough momentum on the project to where I could continue in my own time to try training with more data, or with different architectures to see if I can get better and better results. I would love to get this research to the point where it could actually be put into some sort of creation application where users could specify parameters for generating a mesh using the network and then use it in a game. I am looking forward to the future of Project Rodin, and am excited to see where the project goes!
