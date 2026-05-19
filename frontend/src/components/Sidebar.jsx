function Sidebar(){
return(
<div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', gap: '1.5rem'}}>
    
    {/* profile picture */}
    <img
        src="/profile_photo.jpeg"
        alt="Your Name"
        style={{
            width: '155px',
            height: '155px',
            backgroundColor: '#334155',
            borderRadius: '50%',
            marginBottom: '0rem'
        }}    
    />

    {/* identity */}
    <div>
        <h1 style={{fontSize: '2.7rem', marginBottom: '0.5rem'}}>Your Name</h1>
        <h2 style={{fontSize: '1.3rem', color: '#94A3B8', fontWeight: 'normal', padding: '0 0 0.5rem 0'}}>AI & Machine Learning Engineer</h2>
    </div>


    {/* bio */}
    <p style={{lineHeight: '1.6', color: '#CBD5E1', fontSize: '1.05rem', fontWeight: 'normal'}}>
        AI...
        <br/>
        Passionate.....
        <br/><br/>
        Upcoming graduate student at the.....
    </p>

    {/* links */}
    <div style={{display: 'flex', flexWrap:'wrap', gap: '0.8rem', marginTop: '0.5rem'}}>
        <a target="_blank" href="#" style={{color: '#38BDF8', textDecoration: 'none', fontWeight: '600', fontSize: '1rem', padding: '0.5rem 1rem', backgroundColor: '#0F172A', borderRadius: '999px', border: '1px solid #334155'}}>GitHub</a>
        <a target="_blank" href="#" style={{color: '#38BDF8', textDecoration: 'none', fontWeight: '600', fontSize: '1rem', padding: '0.5rem 1rem', backgroundColor: '#0F172A', borderRadius: '999px', border: '1px solid #334155'}}>LinkedIn</a>
        <a target="_blank" href="#" rel="noopener noreferrer" style={{color: '#38BDF8', textDecoration: 'none', fontWeight: '600', fontSize: '1rem', padding: '0.5rem 1rem', backgroundColor: '#0F172A', borderRadius: '999px', border: '1px solid #334155'}}>Resume</a>
    </div>

</div>
);
}

export default Sidebar;