import React from 'react';
import Component from '@/components/ui/stacking-card';

const courses = [
    {
        title: 'Data Analytics with Gen AI',
        description: 'Excel, Power BI, SQL/Database basics, statistics and data storytelling — plus Gen AI tools & prompt techniques for analytics and report automation.',
        link: '/course-images/data_analytics_dashboard_1765605302737.png',
        color: '#ffbc00',
    },
    {
        title: 'Data Science with Gen AI',
        description: 'Python for data science, math & stats foundations, ML pipelines, NLP basics, CRISP-DM and PySpark/Big Data workflows.',
        link: '/course-images/data_science_jupyter_1765605319134.png',
        color: '#03a9f4',
    },
    {
        title: 'AI/ML with Gen AI',
        description: 'Machine learning & deep learning fundamentals, transformers, model training, LLM pipelines (RAG, vector DBs) and experimentation.',
        link: '/course-images/neural_network_ai_1765605335693.png',
        color: '#4dff03',
    },
    {
        title: 'Python Developer (Django & Web)',
        description: 'Python and Django web frameworks, REST APIs, backend logic, database integration and deployment to cloud platforms.',
        link: '/course-images/python_django_code_1765605351219.png',
        color: '#9c27b0',
    },
    {
        title: 'Gen AI Engineer',
        description: 'Build production Gen AI solutions: prompt design, RAG architectures, vector embeddings, fine-tuning and deploying Gen AI products.',
        link: '/course-images/genai_prompt_interface_1765605367729.png',
        color: '#ffd700',
    },
    {
        title: 'Cloud & Data Engineer',
        description: 'Data engineering fundamentals: SQL, data warehouses, ETL pipelines, Spark, Linux and cloud basics (Azure/AWS) for production data workflows.',
        link: '/course-images/cloud_infrastructure_1765605386543.png',
        color: '#00bcd4',
    },
    {
        title: 'AI Essentials',
        description: 'Foundations of AI for beginners: basics of AI concepts, MS Office & Google Apps, generative content workflows (text, image, audio).',
        link: '/course-images/ai_learning_classroom_1765605402545.png',
        color: '#e91e63',
    },
    {
        title: 'Models Development & Maintenance',
        description: 'Model lifecycle: development, testing, deployment, monitoring, MLOps pipelines, CI/CD for models and maintenance best practices.',
        link: '/course-images/mlops_deployment_1765605421618.png',
        color: '#3f51b5',
    },
];

function StackingCoursesDemo() {
    return <Component projects={courses} />;
}

export default StackingCoursesDemo;
