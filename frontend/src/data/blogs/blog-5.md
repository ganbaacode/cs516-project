---
title: My thoughts on FAAS
date: 2024-01-15 15:42:00
category: blog
image: {
	src: "../images/blog/faas.png"
}
---
More on FaaS
AWS's FaaS offering is called AWS Lambda and is one of the first from the major cloud providers. Note that Lambda isn't the only game in town. Microsoft Azure Functions, IBM Cloud Functions, and
Google Cloud Functions are other Faas services you might want to look at.
Many developers conflate serverless with FaaS offerings like AWS Lambda, which often leads to confusing arguments around the adoption of containers or serverless when they really mean containers or functions. We like how TJ Hallowaychuk, the creator of the Apex framework, defines what serverless is about. He once tweeted,
"serverless != functions, Faas == functions, serverless == on-demand scaling and pricing characteristics (not limited to functions)." We couldn't agree more.
An emerging trend is that of serverless containers; that is, leveraging containers instead of functions to implement the custom logic and using the container as a utility service and incurring costs only when the container runs. Services like AWS Far-gate or Google Cloud Run offer this capability. The difference between the two (functions vs. containers) is just the degree to which developers want to shift the boundaries of shared responsibilities. Containers give you a bit more control over user space libraries and network capabilities. Containers are an evolution of the existing server-based/VM model, offering an easy packaging and deployment model for your application stack. You are still required to define your operating system's requirements, your desired language stack, and dependencies to deploy code, which means you continue to carry some of the infrastructure complexity. For the purpose of this book, we are going to focus on using FaaS for our custom logic, though you can explore the usage of serverless containers for the same as well.
