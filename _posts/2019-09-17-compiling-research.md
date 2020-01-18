---
title: "My Academic Research"
layout: post

# optional alternate title to replace page.title at the top of the page
#alt_title: "Basically Basic"

# optional sub-title below the page title
# sub_title: ""

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
I searched for pre-existing academic research in my area of interest in creating a generative ML model for creating 3D models for video games. Here is a selection of the most relevant articles I found with links and annotations.


### Learning a Probabilistic Latent Space of Object Shapes via 3D Generative-Adversarial Modeling

Wu et al. (NeurIPS 2016)
[Link to article](https://arxiv.org/pdf/1610.07584.pdf)

The authors present a model “3D Generative Adversarial Network (3D-GAN)”  for the generation of 3D shapes in 64x64x64 voxel grids by the discriminator and subsequent decision by the discriminator on whether a generated model is real or synthetic. Their system required raising the update threshold on the discriminator because it was learning much faster than the generator part. Also demonstrated is a separate network, “3D Variational Auto-Encoder GAN (3D-VAE-GAN)” that can reconstruct a 3D shape from a corresponding 2D image. The results appear to be novel shapes in the trained categories from the ModelNet database (chair, car, sofa, etc.), but are somewhat noisy and naturally low-resolution. Nonetheless, this relatively early (NeurIPS 2016) study is useful as a foundation for later studies and the kind of system I wish to build, in particular the generator portion.

### Improved Adversarial Systems for 3D Object Generation and Reconstruction

Smith et al. (CoRL 2017)
[Link to article](https://arxiv.org/pdf/1707.09557.pdf)

This study attempts to improve on the 3D-GAN model by using the Wasserstein training objective in what they call the “3D Improved Wasserstein GAN (3D-IWGAN)”. They specifically focus on the case where one model is trained on a distribution of data that includes multiple training data classes, each one with multiple different object orientations. The authors also create a 3D-VAE-IWGAN system as an improvement on Wu et al.’s 3D-VAE-GAN. In their results, they show how the Wasserstein algorithm allows for more stable convergence of the model than traditional GANs. Also explored here is the reconstruction of 3D models from 2D depth images, using the 3D-VAE-IWGAN system. Model output is at a resolution of 32x32x32; half that of the 3D-GAN. Despite this fact, this paper may be of good use because they made their code publically available on GitHub, which I could reference.

### Shape Inpainting using 3D Generative Adversarial Network and Recurrent Convolutional Networks

Wang et al. (2017)
[Link to article](https://arxiv.org/pdf/1711.06375.pdf)

The paper proposes a “3D Encoder-Decoder GAN (3D-ED-GAN)” for the purpose of filling in missing 3D voxel data and also predicting new features at a higher resolution. Specifically they slice outputs from the GAN into 2D images which are then fed to a separate Long Short-Term Memory (LSTM) network that produces the upscaled images that can then be recombined into a 128x128x128 3D voxel model. The input for the model, however is an existing but noisy 3D model, which means this approach may not be as useful for the main synthesis task I wish to solve. However, the LSTM upscaler could be a useful tool to investigate in trying to increase the resolution the output of the system I plan to build.


### Synthesizing 3D Shapes via Modeling Multi-View Depth Maps and Silhouettes with Deep Generative Networks

Soltani et al. (CVPR 2017)
[Link to article](http://openaccess.thecvf.com/content_cvpr_2017/papers/Soltani_Synthesizing_3D_Shapes_CVPR_2017_paper.pdf)

This work focues on generation of 3D shapes from different 2D depth views. The authors use a variational autoencoder on the depth images, then project them into 3D point clouds that are combined into one 3D shape. With their trained model it is possible to sample what it has learned to generate novel 3D shapes. The results have rather smooth curvature unlike the low-resolution voxel outputs from other studies, but still lack great detail so that many portions of shapes are either blob or stick-like shapes. The precision of the models increases when applied to a task for reconstructing a 3D mesh from a 2D depth image, but since I am interested in direct 3D generation this is not as useful. Nonetheless this is an important study for understanding how a point-cloud approach would work as opposed to a voxel-based approach.

### AtlasNet: A Papier-Mâché Approach to Learning 3D Surface Generation

Groueix et al. (2018)
[Link to article](https://arxiv.org/pdf/1802.05384.pdf)

The paper proposes an ML model called “AtlasNet” for generating 3D shapes that prioritizes the creation of a 2D “atlas” of differently sized squares (more complex polygons in the optimized version) to build of a 3D mesh directly instead of a voxel grid or point cloud. This method is very similar to the atlases created for texture modeling in game development. Two applications considered for this model are translating from a point cloud to a 3D mesh using an autoencoder, and 3D reconstruction from a 2D image. The authors run multiple resolutions of the model and the higher ones show a great amount of detail. They also demonstrate an application on interpolation between given 3D shapes, but it is not entirely clear how useful this model would be for the sort of random sampling of the space of learned 3D shapes that I wish to investigate.

### Deep Marching Cubes: Learning Explicit Surface Representations

Liao et al. (CVPR 2018)
[Link to article](http://www.cvlibs.net/publications/Liao2018CVPR.pdf)

This work is about a model called “Deep Marching Cubes (DMC)” that is able to create surface (mesh) representations of other 3D formats such as voxels or point clouds. The analogy is with the marching cubes method, which is the classical way to translate voxel data into a 3D mesh. The model uses an encoder-decoder architecture with point clouds as input, though the authors note that the system could easily be adapted to voxels or even 2D images. The model also employs several loose assumptions in order to determine how voxels or point clouds are filled, but these are explicitly not tied to any specific type of geometry so they should mean that this model is still adaptable to many shape types. The results are not perfect and most of the presented shapes look like they could use some smoothing, but this system is still particularly notable because its output is in the form of a mesh, which eliminates the need to perform a translation algorithm on a point cloud or voxel grid.

*****************************

## Full Article List

- Video-to-Video Synthesis [(Link)](https://arxiv.org/pdf/1808.06601.pdf)
- Photo-Realistic Single Image Super-Resolution Using a Generative Adversarial Network [(Link)](https://arxiv.org/pdf/1609.04802.pdf)
- ESRGAN: Enhanced Super-Resolution Generative Adversarial Networks [(Link)](https://arxiv.org/pdf/1809.00219v2.pdf)
- Evolving Mario Levels in the Latent Space of a Deep Convolutional Generative Adversarial Network [(Link)](https://arxiv.org/pdf/1805.00728.pdf)
- DOOM Level Generation using Generative Adversarial Networks [(Link)](https://arxiv.org/pdf/1804.09154.pdf)
- Learning a Probabilistic Latent Space of Object Shapes via 3D Generative-Adversarial Modeling [(Link)](https://arxiv.org/pdf/1610.07584.pdf)
- Improved Adversarial Systems for 3D Object Generation and Reconstruction [(Link)](https://arxiv.org/pdf/1707.09557.pdf)
- Shape Inpainting using 3D Generative Adversarial Network and Recurrent Convolutional Networks [(Link)](https://arxiv.org/pdf/1711.06375.pdf)
- Audio-Driven Facial Animation by Joint End-to-End Learning of Pose and Emotion [(Link)](https://dl-acm-org.proxy.lib.umich.edu/citation.cfm?id=3073658)
- Phase-Functioned Neural Networks for Character Control [(Link)](http://theorangeduck.com/media/uploads/other_stuff/phasefunction.pdf)
- 3D Character Generation using PCGML [(Link)](https://www.ijitee.org/wp-content/uploads/papers/v8i6s/F60320486S19.pdf)
- Procedural Content Generation via Machine Learning (PCGML) [(Link)](https://arxiv.org/pdf/1702.00539.pdf)
- A Style-Based Generator Architecture for Generative Adversarial Networks [(Link)](https://arxiv.org/pdf/1812.04948.pdf)
- Learning a Predictable and Generative Vector Representation for Objects [(Link)](https://arxiv.org/pdf/1603.08637.pdf)
- SurfNet: Generating 3D shape surfaces using deep residual networks [(Link)](http://openaccess.thecvf.com/content_cvpr_2017/papers/Sinha_SurfNet_Generating_3D_CVPR_2017_paper.pdf)
- Generative and Discriminative Voxel Modeling with Convolutional Neural Networks [(Link)](https://arxiv.org/pdf/1608.04236.pdf)
- 3DFaceGAN: Adversarial Nets for 3D Face Representation, Generation, and Translation [(Link)](https://arxiv.org/pdf/1905.00307.pdf)
- Neural 3D Mesh Renderer [(Link)](http://openaccess.thecvf.com/content_cvpr_2018/papers/Kato_Neural_3D_Mesh_CVPR_2018_paper.pdf)
- Shape Completion using 3D-Encoder-Predictor CNNs and Shape Synthesis [(Link)](http://openaccess.thecvf.com/content_cvpr_2017/papers/Dai_Shape_Completion_Using_CVPR_2017_paper.pdf)
- Game Level Generation from Gameplay Videos [(Link)](https://www.aaai.org/ocs/index.php/AIIDE/AIIDE16/paper/view/14008/13593)
- Capture, Learning, and Synthesis of 3D Speaking Styles [(Link)](http://openaccess.thecvf.com/content_CVPR_2019/papers/Cudeiro_Capture_Learning_and_Synthesis_of_3D_Speaking_Styles_CVPR_2019_paper.pdf)
- Encoder–decoder recurrent network model for interactive character animation generation [(Link)](https://link.springer.com/article/10.1007/s00371-017-1378-5)
- GRAINS: Generative Recursive Autoencoders for INdoor Scenes [(Link)](https://dl.acm.org/citation.cfm?id=3303766)
- Multi-View Silhouette and Depth Decomposition for High Resolution 3D Object Representation [(Link)](https://arxiv.org/pdf/1802.09987.pdf)
- 3D-RCNN: Instance-level 3D Object Reconstruction via Render-and-Compare [(Link)](http://openaccess.thecvf.com/content_cvpr_2018/CameraReady/1128.pdf)
- Exploring Generative 3D Shapes Using Autoencoder Networks [(Link)](https://www.autodeskresearch.com/publications/exploring_generative_3d_shapes)
- Analysis and synthesis of 3D shape families via deep-learned generative models of surfaces [(Link)](https://people.cs.umass.edu/~hbhuang/publications/bsm/)
- Synthesizing 3D Shapes via Modeling Multi-View Depth Maps and Silhouettes with Deep Generative Networks [(Link)](http://openaccess.thecvf.com/content_cvpr_2017/papers/Soltani_Synthesizing_3D_Shapes_CVPR_2017_paper.pdf)
- Octree Generating Networks: Efficient Convolutional Architectures for High-resolution 3D Outputs [(Link)](https://arxiv.org/pdf/1703.09438.pdf)
- Interactive 3D Modeling with a Generative Adversarial Network [(Link)](https://arxiv.org/pdf/1706.05170.pdf)
- ComplementMe: Weakly-Supervised Component Suggestions for 3D Modeling [(Link)](https://arxiv.org/pdf/1708.01841.pdf)
- AtlasNet: A Papier-Mâché Approach to Learning 3D Surface Generation [(Link)](https://arxiv.org/pdf/1802.05384.pdf)
- Deep Marching Cubes: Learning Explicit Surface Representations [(Link)](http://www.cvlibs.net/publications/Liao2018CVPR.pdf)
- FrankenGAN: Guided Detail Synthesis for Building Mass Models using Style-Synchonized GANs [(Link)](http://geometry.cs.ucl.ac.uk/projects/2018/frankengan/)
