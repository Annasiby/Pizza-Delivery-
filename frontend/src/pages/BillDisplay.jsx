import React from "react";
import { useLocation } from "react-router-dom";
import jsPDF from "jspdf";

const BillDisplay = () => {
  const location = useLocation();
  const { order } = location.state || {};

  if (!order) {
    return <h2 style={{ textAlign: "center" }}>No order details available</h2>;
  }

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("My Pizza App", 105, 15, { align: "center" }); // Centered
    
    doc.setFontSize(18);
    doc.text("Pizza Order Invoice", 105, 25, { align: "center" }); // Centered
    
    // Order Details Section
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    
    let y = 40; // Start Y Position
    doc.text(`Order ID: ${order.id}`, 20, y);
    y += 10;
    doc.text(`Customer Name: ${order.customerName}`, 20, y);
    y += 10;
    doc.text(`Date: ${order.date}`, 20, y);
    y += 10;
    doc.text(`Delivery Address: ${order.address}`, 20, y);
    y += 10;
    doc.text(`Phone: ${order.phone}`, 20, y);
    y += 15; // Extra spacing before items
    
    // Order Items Header with Better Spacing
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Order Items:", 20, y);
    y += 10;
    
    // Column Headers (Centered Titles)
    doc.setFontSize(12);
    doc.text("S.No", 20, y);
    doc.text("Item", 50, y);
    doc.text("Qty", 140, y);
    doc.text("Price", 170, y);
    y += 5;
    
    // Separator Line
    doc.line(20, y, 180, y);
    y += 10;
    
    // **✅ Fixing Quantity Issue**
    doc.setFont("helvetica", "normal");
    order.items.forEach((item, index) => {
      let quantity = item.quantity || 1; // Default to 1 if undefined
      doc.text(`${index + 1}.`, 20, y); // Serial Number
      doc.text(`${item.name}`, 50, y); // Item Name
      doc.text(`${quantity}`, 145, y); // Quantity
      doc.text(`Rs. ${item.price}`, 170, y); // Price (Right Aligned)
      y += 10;
    });
    
    // Line Separator Before Total
    doc.line(20, y, 180, y);
    y += 15;
    
    // GST & Fees
    doc.setFont("helvetica", "bold");
    doc.text(`GST and Platform Fee: Rs. 30`, 20, y);
    y += 15;
    
    // Total Amount
    doc.text(`Total Amount: Rs. ${order.total}`, 20, y);
    y += 20;
    
    // Thank You Message (Centered)
    doc.setFont("helvetica", "italic");
    doc.setFontSize(10);
    doc.text("Thank you for ordering with us!", 105, y, { align: "center" });
    


    doc.save("Pizza_Order_Bill.pdf"); // Save file
  };

  return (
    <div style={styles.container}>
      <h2>Order Bill 🧾</h2>

      <div style={styles.billBox}>
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Customer:</strong> {order.customerName}</p>
        <p><strong>Date:</strong> {order.date}</p>
        <p><strong>Delivery Address:</strong> {order.address}</p>
        <p><strong>Phone:</strong> {order.phone}</p>

        <h3>Order Items:</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Item</th>
              <th style={styles.th}>Price</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item, index) => (
              <tr key={index}>
                <td style={styles.td}>{item.name}</td>
                <td style={styles.td}>Rs.{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p><strong>GST & Platform Fee:</strong> Rs. 30</p>
        <h3>Total: Rs. {order.total}</h3>

        <button style={styles.downloadButton} onClick={handleDownloadPDF}>
          Download Bill 📄
        </button>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: { textAlign: "center", padding: "20px" },
  billBox: { border: "1px solid #ccc", padding: "20px", width: "50%", margin: "auto", textAlign: "left" },
  table: { width: "100%", borderCollapse: "collapse", marginTop: "10px" },
  th: { borderBottom: "2px solid #000", padding: "8px", textAlign: "left" },
  td: { borderBottom: "1px solid #ccc", padding: "8px", textAlign: "left" },
  downloadButton: { backgroundColor: "green", color: "white", padding: "10px 20px", border: "none", cursor: "pointer", marginTop: "10px" },
};

export default BillDisplay;
