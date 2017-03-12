# FLUX-Sampler
##A UI pattern inspired by the Facebook FLUX model

In this sampler I have developed a UI model inspired by the Facebook FLUX pattern. This consists of the following components:

* Dispatcher: hub for all Actions ()messages and data) to be processed.
* Models: data sets (states) being maintained. These subscribe to the Dispatcher so they can be notified of any Actions that might affect them.
* Views: User Interface elements that subscribe to the relative models they present.

![FLUX Sampler](./FLUX_Sampler.png)
