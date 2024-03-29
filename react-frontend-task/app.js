const { useState } = React;



function EditableTable() {

    const initialData = [
        { id: 1,name:'Database Access', col1: '', col2:'' , col3:'', col4:'', col5:'', col6:''},
        { id: 1,name:'Website Access', col1: '', col2:'' , col3:'', col4:'', col5:'', col6:''},
        { id: 1,name:'Server Access', col1: '', col2:'' , col3:'', col4:'', col5:'', col6:''},
        { id: 1,name:'Google Access', col1: '', col2:'' , col3:'', col4:'', col5:'', col6:''},
        { id: 1,name:'Microsoft', col1: '', col2:'' , col3:'', col4:'', col5:'', col6:''},
        { id: 1,name:'Facebook', col1: '', col2:'' , col3:'', col4:'', col5:'', col6:''},
        { id: 1,name:'Meta', col1: '', col2:'' , col3:'', col4:'', col5:'', col6:''},
        { id: 1,name:'X', col1: '', col2:'' , col3:'', col4:'', col5:'', col6:''},
        { id: 1,name:'Space X', col1: '', col2:'' , col3:'', col4:'', col5:'', col6:''},
       
      ];
      
      const [tableData, setTableData] = useState(initialData);
      const [editingCell, setEditingCell] = useState(null)

      const handleEditCell = () => {
        setEditingCell(true)
      }

      
    const handleEdit = (rowIndex, colIndex, newValue) => {
      const updatedData = [...tableData];
      updatedData[rowIndex][Object.keys(tableData[rowIndex])[colIndex]] = newValue;
      setTableData(updatedData);
    };
  
    return (
      <table>
        <thead>
          <tr>
            <th>Month 1</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={row.id}>
              <td onClick={handleEditCell}>
                {editingCell === true? (
                  <input
                    type="text"
                    defaultValue={row.name}
                    onChange={(e) => handleEdit(rowIndex, 1, e.target.value)}
                    onBlur={() => setEditingCell(null)} 
                  />
                ) : (
                  row.name
                )}
              </td>
              <td onClick={handleEditCell}>
                {editingCell === true ? ( 
                  <input
                    type="text"
                    defaultValue={row.col1}
                    onChange={(e) => handleEdit(rowIndex, 2, e.target.value)}
                    onBlur={() => setEditingCell(null)} 
                  />
                ) : (
                  row.col1
                )}
              </td>
              <td onClick={handleEditCell}>
                {editingCell === true ? ( 
                  <input
                    type="text"
                    defaultValue={row.col2}
                    onChange={(e) => handleEdit(rowIndex, 3, e.target.value)}
                    onBlur={() => setEditingCell(null)} 
                  />
                ) : (
                  row.col2
                )}
              </td>
              <td onClick={handleEditCell}>
                {editingCell === true ? ( 
                  <input
                    type="text"
                    defaultValue={row.col3}
                    onChange={(e) => handleEdit(rowIndex, 4, e.target.value)}
                    onBlur={() => setEditingCell(null)} 
                  />
                ) : (
                  row.col3
                )}
              </td>
              <td onClick={handleEditCell}>
                {editingCell === true ? ( 
                  <input
                    type="text"
                    defaultValue={row.col4}
                    onChange={(e) => handleEdit(rowIndex, 5, e.target.value)}
                    onBlur={() => setEditingCell(null)} 
                  />
                ) : (
                  row.col4
                )}
              </td>
              <td onClick={handleEditCell}>
                {editingCell === true ? ( 
                  <input
                    type="text"
                    defaultValue={row.col5}
                    onChange={(e) => handleEdit(rowIndex, 6, e.target.value)}
                    onBlur={() => setEditingCell(null)} 
                  />
                ) : (
                  row.col5
                )}
              </td>
              <td onClick={handleEditCell}>
                {editingCell === true ? ( 
                  <input
                    type="text"
                    defaultValue={row.col6}
                    onChange={(e) => handleEdit(rowIndex, 7, e.target.value)}
                    onBlur={() => setEditingCell(null)} 
                  />
                ) : (
                  row.col6
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  

const root = document.getElementById('root')


ReactDOM.render(<EditableTable />, root)
