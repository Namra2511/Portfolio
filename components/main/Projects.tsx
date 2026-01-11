"use client";

import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";
import ProjectDetailModal from "../sub/ProjectDetailModal";

interface ProjectDetail {
    src: string;
    title: string;
    description: string;
    architecture?: string;
    implementation?: string[];
    monitoring?: string;
    security?: string;
    techStack?: string[];
    results?: string[];
    isConfidential?: boolean;
}

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

    const projects: ProjectDetail[] = [
        {
            src: "/docker.webp",
            title: "Production-Ready AWS 3-Tier Application with Automated CI/CD & Kubernetes (EKS)",
            description: "Designed and implemented a production-grade 3-tier application on AWS with a fully automated CI/CD pipeline and Kubernetes-based deployment. The system supports environment-based deployments within a single EKS cluster, where commits to the main branch deploy directly to production and pull requests deploy to preview workloads for validation before merge. This approach enables safe testing, controlled releases, and cost-efficient infrastructure usage.",
            architecture: "The application follows a 3-tier architecture: Presentation tier – containerized frontend, Application tier – backend services running on Kubernetes, and Infrastructure tier – AWS networking, IAM, and managed services. All workloads are deployed on AWS EKS with auto-scaling, rolling updates, and high availability.",
            implementation: [
                "A code commit triggers a GitHub Actions workflow",
                "The pipeline builds a Docker image and pushes it to Docker Hub",
                "Kubernetes manifests are applied to deploy the image to EKS",
                "The application is rolled out using rolling updates, ensuring zero downtime"
            ],
            monitoring: "Prometheus collects cluster and application metrics. Grafana visualizes logs and metrics through custom dashboards. Monitoring provides real-time visibility into application health and resource usage.",
            security: "IAM roles follow the principle of least privilege. Security groups restrict network access. Infrastructure is provisioned and managed using Terraform.",
            techStack: [
                "Amazon Web Services (AWS)",
                "Kubernetes (EKS)",
                "Docker",
                "GitHub Actions",
                "Terraform",
                "Prometheus",
                "Grafana"
            ],
            results: [
                "🚀 75% faster deployments through CI/CD automation",
                "🔄 Zero-downtime releases using Kubernetes rolling updates",
                "🧪 Safe preview deployments without impacting production",
                "📈 99.9% uptime with auto-scaling and health checks",
                "🧱 Fully automated, reproducible infrastructure"
            ],
            isConfidential: true
        },
        {
            src: "/CardImage.png",
            title: "Production-Grade AWS Infrastructure with Terraform",
            description: "Designed a fully automated, production-ready AWS infrastructure using Infrastructure as Code (IaC) principles. The entire cloud environment is defined using modular Terraform, enabling consistent provisioning, version control, and safe change management without manual configuration. Created an infrastructure blueprint that is secure, scalable, highly available, and maintainable, suitable for real production workloads.",
            architecture: "Multi-AZ Virtual Private Cloud (VPC) with public subnets for external traffic and load balancers, private subnets for Kubernetes worker nodes, managed Kubernetes control plane (EKS), Application Load Balancer for traffic ingress, IAM roles scoped strictly to required permissions, and remote Terraform state management for collaboration and safety. The design avoids single points of failure and supports future scaling without structural changes.",
            implementation: [
                "Networking Module: Defines VPC, subnets, route tables, NAT Gateway, and Internet Gateway with clear separation between public and private resources",
                "EKS Module: Provisions a managed Kubernetes cluster with worker nodes deployed in private subnets, designed for horizontal scaling and rolling updates",
                "IAM Module: Implements least-privilege IAM roles for the Kubernetes control plane, worker nodes, and AWS services",
                "Load Balancer Integration: Configures AWS Application Load Balancer to route external traffic securely to services inside the cluster",
                "State Management: Uses Amazon S3 for remote Terraform state storage and DynamoDB for state locking to prevent concurrent changes"
            ],
            monitoring: "Infrastructure monitoring through AWS CloudWatch for resource utilization, VPC Flow Logs for network traffic analysis, and CloudTrail for audit logging of all infrastructure changes and API calls.",
            security: "Implements least-privilege IAM roles avoiding over-permissive policies, network isolation through VPC with private subnets, security groups for traffic restriction, and encrypted Terraform state storage in S3 with DynamoDB locking for safe concurrent operations.",
            techStack: [
                "Terraform",
                "Amazon Web Services (AWS)",
                "VPC",
                "EKS (Elastic Kubernetes Service)",
                "IAM",
                "Application Load Balancer",
                "S3 & DynamoDB",
                "Kubernetes",
                "Git"
            ],
            results: [
                "🏗️ Created a production-grade AWS infrastructure blueprint",
                "⚡ Eliminated manual infrastructure provisioning",
                "🔒 Improved security through least-privilege access control",
                "🔄 Enabled safe, repeatable, and auditable infrastructure changes",
                "📦 Provided a scalable foundation suitable for CI/CD-driven deployments"
            ]
        },
        {
            src: "/SpaceWebsite.png",
            title: "Optimized CI/CD Pipeline with DevSecOps Controls",
            description: "Implemented an optimized CI/CD pipeline designed to balance delivery speed, security, and reliability. The pipeline automates build, test, security scanning, and deployment workflows while avoiding common CI pitfalls such as unnecessary job execution, over-blocking security checks, and inefficient resource usage. The emphasis is on practical DevSecOps, where security controls enhance software quality without slowing down development.",
            architecture: "Event-driven and environment-aware CI/CD architecture where Pull Requests trigger validation and security checks only, while Main branch commits trigger production-grade build and deployment workflows. Features independent pipelines for build, security scanning, and deployment, with container image registry used as the promotion boundary and security gates applied based on vulnerability severity. This separation ensures fast feedback during development while enforcing stricter controls in production.",
            implementation: [
                "Pipeline Optimization: Conditional job execution based on branch and event type, avoiding deployment steps for documentation changes, with caching strategies for dependencies and container layers",
                "Build & Artifact Management: Docker images built using multi-stage builds with immutable tagging based on commit SHA, promoted through environments without rebuilds",
                "DevSecOps Integration: Container image scanning using vulnerability scanners, dependency scanning during build stage, CI configured to fail only on critical vulnerabilities with reports preserved as artifacts",
                "Secrets & Configuration Safety: No secrets stored in repository, CI uses secure environment variables and role-based access, configuration separated from application code",
                "Deployment Strategy: Automated deployments triggered only from protected branches with rollback mechanism and preview deployments supported for pull requests"
            ],
            monitoring: "Pipeline monitoring through GitHub Actions insights with detailed workflow analytics, build performance tracking, automated alerting for failed builds or deployments, and comprehensive logging for troubleshooting and audit purposes.",
            security: "Integrated container and dependency vulnerability scanning using Trivy, security gates configured to fail only on critical vulnerabilities, secure secret management through encrypted environment variables, role-based access control for pipeline execution, and security scan reports preserved as build artifacts for auditability and compliance.",
            techStack: [
                "GitHub Actions",
                "Docker",
                "Trivy",
                "AWS ECR",
                "Git",
                "Bash/Shell Scripting"
            ],
            results: [
                "⚡ Reduced unnecessary CI runs by isolating workflows based on context",
                "🚀 Improved build speed through caching and optimized Docker builds",
                "🔒 Integrated security scanning without blocking non-critical issues",
                "✅ Created a CI/CD pipeline suitable for real production environments",
                "🎯 Demonstrated balanced DevSecOps practices aligned with business delivery needs"
            ]
        },
        {
            src: "/SpaceWebsite.png",
            title: "Optimized Containerized Deployment on Kubernetes (Production Best Practices)",
            description: "Implemented an optimized, production-ready containerized application deployment on Kubernetes, emphasizing reliability, scalability, security, and operational efficiency. Demonstrates how Kubernetes should be used in real production environments, where stability, controlled rollouts, and resource efficiency are critical, rather than basic container deployment.",
            architecture: "Deployment architecture designed with high availability and fault tolerance: containerized application deployed via Kubernetes Deployments, Services for internal traffic routing, Ingress controller for external access, Horizontal Pod Autoscaler (HPA) for dynamic scaling, Pods distributed across nodes to avoid single-point failures, and separation of configuration and application logic. The architecture supports zero-downtime deployments and predictable scaling behavior.",
            implementation: [
                "Container Optimization: Multi-stage Docker builds to minimize image size, non-root containers for security, immutable images tagged using commit-based versions, health-focused design",
                "Kubernetes Deployment Best Practices: Resource requests and limits defined, liveness and readiness probes configured, rolling update strategy with controlled surge, PodDisruptionBudgets for availability",
                "Scaling & Availability: Horizontal Pod Autoscaler based on resource utilization, stateless application design for horizontal scaling, node-friendly resource allocation",
                "Configuration & Secrets Management: Application configuration via ConfigMaps, sensitive values using Kubernetes Secrets, no secrets embedded in images or manifests",
                "Operational Safety: Namespace-based isolation, labels and annotations for observability, clear separation between application, configuration, and infrastructure"
            ],
            monitoring: "Cluster and application monitoring through Prometheus and Metrics Server for resource utilization and scaling metrics, pod health tracking through readiness and liveness probes, and comprehensive logging for operational visibility and troubleshooting.",
            security: "Non-root container execution for improved security posture, reduced container image size minimizing attack surface, Kubernetes Secrets for sensitive data management, namespace-based isolation for workload separation, and proper RBAC configuration for cluster access control.",
            techStack: [
                "Kubernetes",
                "Docker",
                "Helm",
                "Ingress Controller",
                "Horizontal Pod Autoscaler",
                "Prometheus",
                "Metrics Server",
                "Git"
            ],
            results: [
                "✅ Implemented zero-downtime application deployments",
                "📊 Improved cluster stability through proper resource management",
                "🚀 Enabled automatic scaling based on workload demand",
                "🔒 Reduced container image size and attack surface",
                "🏗️ Created a deployment model suitable for long-running production workloads"
            ]
        }
    ];

    return (
        <div
            className="relative flex flex-col items-center justify-center py-16 z-30"
            id="projects"
        >
            <h1 className="text-[40px] md:text-[50px] font-extrabold py-12 tracking-tight">
                <span className="text-gradient-advanced">Projects</span>
            </h1>
            <div className="relative h-full w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6 px-5 md:px-10 z-30">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        src={project.src}
                        title={project.title}
                        description={project.description}
                        onClick={() => {
                            console.log("Card clicked:", project.title);
                            setSelectedProject(project);
                        }}
                    />
                ))}
            </div>

            <ProjectDetailModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </div>
    );
};

export default Projects;