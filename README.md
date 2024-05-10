# No-Code Chatbot Integration Platform

Welcome to our project repository for the HackFest'24! This README provides an overview of our solution approach, tech stack, and basic workflow.

## Problem Statement

Developing chatbots poses challenges due to their complexity, resource requirements, and associated costs, necessitating expertise in NLP, ML, and software development. 
- Integrating chatbots into platforms is hindered by technical complexity and time-consuming processes, leading to a demand for simplified integration solutions. 
- Configuration typically requires coding knowledge, which is a barrier for non-technical users seeking customized chatbot setups. 
- Scalability issues arise with resource-intensive chatbots or those not optimized for high traffic volumes.
- Setting up chatbots from scratch involves time-consuming tasks like server setup, API integration, and development work.

## Approach

Our team is developing a SaaS platform that enables users to integrate custom chatbots into their websites effortlessly. Key features include:
- **No-Code Integration:** Users can configure and integrate chatbots by simply uploading a file (e.g., PDF, TXT, CSV) with no coding required.
- **Real-time Preview:** Provides a live preview of the chatbot's appearance and functionality before deployment.
- **Customization:** Users can personalize the chatbot's personality, conversation flow, responses, and design.
- **Privacy and Control:** Allows self-hosting of chatbot assets for data privacy and security.

## Tech Stack

### Frontend
- **Framework:** Next.js
- **UI Framework:** Tailwind CSS
- **State Management:** Redux
- **Language:** TypeScript

### Backend
- **Runtime:** Node.js with Express.js
- **AWS SDK:** For AWS service integration
- **Caching:** Redis

### Database
- **Database:** MongoDB

### Large Language Models (LLM)
- **Models:** OpenAI / Gemini / Claude / Mistral 7B

### Deployment & Scalability
- **CI/CD:** GitHub Actions
- **Containerization:** Docker
- **Cloud Services:** AWS EC2, S3, ECR, ECS, CloudFront

## Basic Workflow

1. **Configuration:** Users upload a configuration file to specify chatbot settings.
2. **Preview:** They visualize the chatbot's appearance and behavior in real-time.
3. **Customization:** Users personalize the chatbot's characteristics.
4. **Integration:** The platform generates integration code for easy deployment on their websites.
