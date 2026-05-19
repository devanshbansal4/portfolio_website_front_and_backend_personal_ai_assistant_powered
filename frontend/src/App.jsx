import Sidebar from './components/Sidebar'
import ChatInterface from './components/ChatInterface';
import { wakeUpBackend } from './services/hf_api';
import { useEffect } from 'react';
import WorkExperience from './components/WorkExperience';
import ProjectCard from './components/ProjectCard';
import HonorsAndCertifications from './components/HonorsAndCertifications'


function App() {

    useEffect(() => {
        wakeUpBackend();
    }, []);

return(
<div className="layout-container">


    {/* left side Sidebar */}
    <div className="sidebar">
        <Sidebar/>
    </div>


    {/* right side - Scrollable feed */}
    <div className="feed-content">
        
        {/* work experience part */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            <h3 style={{fontSize: '1.6rem', color: '#F8FAFC', margin: 0}}>Work Experience</h3>
            <WorkExperience
                title=""
                role=""
                date=""
                description={[
                    "",
                    ""
                ]}
                techStack={['', '']}
            />
            <WorkExperience
                title=""
                role=""
                date=""
                description={[
                    "",
                    ""
                ]}
                techStack={['', '']}
            />
        </div>
        
        {/* chatting part */}
        <ChatInterface />
        
        {/* projects */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            <h3 style={{fontSize: '1.6rem', color: '#F8FAFC', margin: 0}}>Projects & Publications</h3>
            
            <ProjectCard
                title=""
                description={[
                    "",
                    ""
                ]}
                tags={['', '']}
                link=""
            />

            <ProjectCard
                title=""
                description={[
                    "",
                    ""
                ]}
                tags={['', '']}
                link=""
            />
            
            <ProjectCard
                title=""
                description={[
                    "",
                    ""
                ]}
                tags={['', '']}
                link=""
            />

            <ProjectCard
                title=""
                description={[
                    "",
                    ""
                ]}
                tags={['', '']}
                link=""
            />
        
        </div>

        {/* honors and certifications */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '3rem'}}>
            <h3 style={{fontSize: '1.6rem', color: '#F8FAFC', margin: '0 0 0.75rem 0'}}>Honors & Certifications</h3>
            
            <HonorsAndCertifications 
                title=""
                issuer=""
                date=""
                link=""
            />

            <HonorsAndCertifications 
                title=""
                issuer=""
                date=""
                link=""
            />

            <HonorsAndCertifications 
                title=""
                issuer=""
                date=""
                link=""
            />

            <HonorsAndCertifications 
                title=""
                issuer=""
                date=""
                link=""
            />

        </div>

    </div>


</div>
);
}

export default App
