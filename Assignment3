#include <iostream>
#include <ctime>
using namespace std;

void static_array()
{
   std::clock_t start_t, end_t;
   int arr[5000];

   start_t = clock();
   cout<<"Static Array \n";
   cout<<"Initializing an integer array of 5000 elements "<<endl;
   for(int i=0; i<5000; i++) {
       arr[i] = i;
   }
   end_t = clock();
   
   cout<<"Done"<<endl;
   cout<<"Total time taken = "<< (end_t - start_t);
}

void stack_dynamic_array()
{
   std::clock_t start_t, end_t;
   int N= 5000;
   int *arr = (int *) alloca(sizeof(int) * N);

   start_t = clock();
   cout<<"Stack Dynamic Array \n";
   cout<<"Initializing an integer array of 5000 elements "<<endl;
   for(int i=0; i<5000; i++) {
       arr[i] = i;
   }
   end_t = clock();
   
   cout<<"Done"<<endl;
   
   cout<<"Total time taken = "<< (end_t - start_t);
}

void heap_dynamic_array()
{
   std::clock_t start_t, end_t;
   int *arr = new int[5000];

   start_t = clock();
   cout<<"Heap Dynamic Array \n";
   cout<<"Initializing an integer array of 5000 elements "<<endl;
   for(int i=0; i<5000; i++) {
       arr[i] = i;
   }
   end_t = clock();
   
   cout<<"End of the program"<<endl;
   cout<<"Total time taken = "<< (end_t - start_t);
}

int main()
{
   static_array();
   cout<<"\n\n";
   
   stack_dynamic_array();
   cout<<"\n\n";
   
   heap_dynamic_array();
   cout<<"\n";
   
   return 0;
}

