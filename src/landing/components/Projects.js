import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  padding: 2rem;
`;

const ProjectCard = styled.div`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectCard>
        <h2>Project 1</h2>
        <p>Description of Project 1.</p>
      </ProjectCard>
      <ProjectCard>
        <h2>Project 2</h2>
        <p>Description of Project 2.</p>
      </ProjectCard>
      {/* Add more project cards as needed */}
    </ProjectsContainer>
  );
};

export default Projects;

