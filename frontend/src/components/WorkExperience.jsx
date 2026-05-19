function WorkExperience({title, role, date, description, techStack=[]}){
return(

    <div style={{
        padding: '1.5rem',
        backgroundColor: '#1E293B',
        borderRadius: '12px',
        border: '1px solid #334155',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
        borderLeft: '3px solid #38BDF8',
    }}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem'}}>
            <h3 style={{fontSize: '1.5rem', margin: 0, color: '#F8FAFC'}}>{title}</h3>
            <span style={{fontSize: '0.95rem', color: '#94A3B8'}}>{date}</span>
        </div>

        <h4 style={{fontSize: '1rem', fontWeight: '500', color: '#E2E8F0', margin: '0 0 1rem 0'}}>{role}</h4>

        <ul style={{color: '#CBD5E1', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '1rem', paddingLeft: '1.2rem'}}>
            {description.map((point, index) => (
                <li key={index} style={{marginBottom: '0.5rem'}}>{point}</li>
            ))}
        </ul>

        <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
            {techStack.map((tech, index) => (
                <span key={index} style={{
                    backgroundColor: '#0F172A', color: '#38BDF8',
                    padding: '0.25rem 0.75rem', borderRadius: '999px',
                    fontSize: '0.80rem', fontWeight: '500', border: '1px solid #1E293B'
                }}>
                {tech}
                </span>
            ))}
        </div>

    </div>

);
}

export default WorkExperience