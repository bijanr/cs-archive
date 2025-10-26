export const structure = {
  id: 'root',
  name: 'Resources',
  type: 'folder',
  children: [
    {
      id: 'books',
      name: 'Books',
      type: 'folder',
      table: 'books', // supabase table 
      children: [
        { id: 'ai', name: 'Artificial Intelligence', type: 'folder', table: 'books', children: [] },
        { id: 'cd', name: 'Compiler Design', type: 'folder', table: 'books', children: [] },
        { id: 'cg', name: 'Computer Graphics', type: 'folder', table: 'books', children: [] },
        { id: 'cn', name: 'Computer Networks', type: 'folder', table: 'books', children: [] },
        { id: 'coa', name: 'Computer Organization and Architecture', type: 'folder', table: 'books', children: [] },
        { id: 'cprog', name: 'C Programming', type: 'folder', table: 'books', children: [] },
        { id: 'daa', name: 'Design and Analysis of Algorithms', type: 'folder', table: 'books', children: [] },
        { id: 'dbms', name: 'Database Management Systems', type: 'folder', table: 'books', children: [] },
        { id: 'dm', name: 'Discrete Mathematics', type: 'folder', table: 'books', children: [] },
        { id: 'dsa', name: 'Data Structures and Algorithms', type: 'folder', table: 'books', children: [] },
        { id: 'os', name: 'Operating Systems', type: 'folder', table: 'books', children: [] },
        { id: 'se', name: 'Software Engineering', type: 'folder', table: 'books', children: [] },
        { id: 'toc', name: 'Theory of Computation', type: 'folder', table: 'books', children: [] },
      ]
    },
    {
      id: 'pyqs',
      name: 'Previous Year Questions',
      type: 'folder',
      table: 'pyqs',// supabase table
      children: [
        { id: 'ai', name: 'Artificial Intelligence', type: 'folder', table: 'books', children: [] },
        { id: 'cd', name: 'Compiler Design', type: 'folder', table: 'pyqs', children: [] },
        { id: 'cg', name: 'Computer Graphics', type: 'folder', table: 'pyqs', children: [] },
        { id: 'cn', name: 'Computer Networks', type: 'folder', table: 'pyqs', children: [] },
        { id: 'coa', name: 'Computer Organization and Architecture', type: 'folder', table: 'pyqs', children: [] },
        { id: 'cprog', name: 'C Programming', type: 'folder', table: 'pyqs', children: [] },
        { id: 'daa', name: 'Design and Analysis of Algorithms', type: 'folder', table: 'pyqs', children: [] },
        { id: 'dbms', name: 'Database Management Systems', type: 'folder', table: 'pyqs', children: [] },
        { id: 'dm', name: 'Discrete Mathematics', type: 'folder', table: 'pyqs', children: [] },
        { id: 'dsa', name: 'Data Structures and Algorithms', type: 'folder', table: 'pyqs', children: [] },
        { id: 'os', name: 'Operating Systems', type: 'folder', table: 'pyqs', children: [] },
        { id: 'se', name: 'Software Engineering', type: 'folder', table: 'pyqs', children: [] },
        { id: 'toc', name: 'Theory of Computation', type: 'folder', table: 'pyqs', children: [] },
      ]
    }
  ]
};