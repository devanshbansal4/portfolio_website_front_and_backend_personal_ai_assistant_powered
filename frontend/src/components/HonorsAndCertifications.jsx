function HonorsAndCertifications({title, issuer, date, link}){
return(

    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: '#1E293B',
        borderRadius: '8px',
        border: '1px solid #334155',
        borderLeft: '3px solid #38BDF8',
    }}>
        <div>
            <h4 style={{fontSize: '1.05rem', color: '#F8FAFC', margin: '0 0 0.25rem 0'}}>{title}</h4>
            <span style={{fontSize: '0.85rem', color: '#94A3B8'}}>{issuer} • {date}</span>
        </div>

        {link && (
            <a href={link} target="_blank" rel="noreferrer" style={{
                color: "#38BDF8",
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: '600',
                paddingLeft: '1rem'
            }}>
                Verify ↗
            </a>
        )}

    </div>

);}

export default HonorsAndCertifications;