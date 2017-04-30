package com.example.andyrots.tipcalculator;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import java.text.NumberFormat;

public class Calculator extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_calculator);

        Button theButton = (Button)findViewById(R.id.submit);
        Button resetButton = (Button)findViewById(R.id.reset);
        final EditText theTotal = (EditText)findViewById(R.id.total);
        final EditText thePercentage = (EditText)findViewById(R.id.percentage);
        final TextView theTip = (TextView)findViewById(R.id.tip);

        theButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                try{
                float total = Float.parseFloat(theTotal.getText().toString());
                float percentage = Float.parseFloat(thePercentage.getText().toString());
                float tip = total * (percentage / 100);
                theTip.setText(NumberFormat.getCurrencyInstance().format(tip));
                Log.i("MyMessage", "You clicked the submit button");
                } catch(NumberFormatException e){
                    theTip.setText("Inputs must be numbers");
                }
            }
        });

       resetButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                theTotal.setText("");
                thePercentage.setText("");
                theTip.setText("");
                Log.i("MyMessage", "You clicked the reset button");

            }
        });

    }
}
