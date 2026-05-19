function MessageBubble({role, text}){
    const isAI = role === 'ai';

return(
<div style={{
    display: 'flex',
    justifyContent: isAI ? 'flex-start' : 'flex-end',
    marginBottom: '1rem'
}}>
    <div style={{
        maxWidth: '85%',
        padding: '0.8rem 1.2rem',
        borderRadius: '12px',
        backgroundColor: isAI ? '#334155' : '#38BDF8',
        color: isAI ? '#F8FAFC' : '#0F172A',
        lineHeight: '1.6',
        fontSize: '0.95rem',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
        whiteSpace: 'pre-wrap'
    }}>
        {text}
    </div>
</div>
);
}

export default MessageBubble