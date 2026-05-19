function ProjectCard({title, description, tags, link, linkText="GitHub ↗"}){
return(
<div style={{
    padding: '1.5rem',
    backgroundColor: '#1E293B',
    borderRadius: '12px',
    border: '1px solid #334155',
    borderLeft: '3px solid #38BDF8',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
}}>
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
        <div style={{paddingRight: '1rem'}}>
            <h3 style={{fontSize: '1.4rem', color: '#F8FAFC', marginBottom: '0.5rem', marginTop: 0}}>{title}</h3>
            <ul style={{color: '#CBD5E1', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '1.25rem', paddingLeft: '1.2rem'}}>
                {description.map((point, index) => (
                    <li key={index} style={{marginBottom: '0.5rem'}}>{point}</li>
                ))}
            </ul>
        </div>

        {link && (
            <a href={link} target="_blank" rel="noreferrer" style={{
                padding: '0.4rem 0.8rem',
                backgroundColor: '#0F172A',
                color: '#F8FAFC',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: '600',
                border: '1px solid #334155',
                whiteSpace: 'nowrap'
            }}>
            {linkText}
            </a>
        )}
    </div>

    <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
        {tags.map((tag, index) => (
            <span key={index} style={{
                color: '#38BDF8',
                backgroundColor: '#0F172A',
                padding: '0.25rem 0.75rem',
                borderRadius: '999px',
                fontSize: '0.80rem',
                fontWeight: '500',
                border: '1px solid #1E293B'
            }}>
                {tag}
            </span>
        ))}
    </div>

</div>
);
}

export default ProjectCard